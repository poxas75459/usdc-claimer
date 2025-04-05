/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4qYMjTDqLX1Ptyep1fYBNRcXFgLwDX8jPRFntEyTCd1TWneGqpbgwRaVgSjMj4KUPeLzsFzW67KBcHFgmkN93p4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vXVuEPoYno7DS155FG9SX224AGmaSZX4GhtfPpWp9Giw5Kcew1wKMWY26NjXNvr4cMoL1t6TngWseMRZErixfmw",
  "key1": "4YZPQ1rYiVLiaFLyfy2UUhFqYLS2cijxMXgodJDtdBtK86bPpVpFpf1wdL4fpJ1u9cV2GUNSxkGiwS4QxjWyYVFQ",
  "key2": "344z6pxm6uDA7V5xV1kL8tvkn7K88aZ1mSJejWkJhQS4ydrQz4DW5kRh7kGf2Ynkgs6Pcpi5vraqKUhvGAF9WyaL",
  "key3": "348c4v8P6gKsjx7Fx6oVyDXZ7bPaJj2WF4H7fFdWuKAknsNNR8jcaeNUgDzza9vYzqrMdzL7WJbRHtoEKzQL48VL",
  "key4": "54hDuo6vyLF7MxKj4zQhmVghZYdtR8FPKAvdeDM8ZonRY487ZGmczaTJDEqeyAVYEPPbMCFTnbVMmS6EKa1nsfh6",
  "key5": "5h8DMrv6sT4P7b4NwZAocvcnEGjPE7fJU2xPMzhAoReus9UgyDwb9mR1x5CsW3qFLfjHibvepdoahZjHG8VT6TEp",
  "key6": "4rgf5iBnTyWz7XfNjNLLivr3wmrba8hZRUR4Kr9DaVNgW4SwocmtnR1to1E5RmgNN7vQojgnUrHQ1ZGy7oYR1fnk",
  "key7": "24btkVS5k8ZRqPJaMdfkAmvrLivvisdat7ETUidwpFNhpQe96Ei2EfhicZzrZoz9dTLdZXVjijrrzseRKXzboN5p",
  "key8": "4YLAfKUieR17YKhK7zBAWCTeXstQq5pnDHTmAUmENNCRaFAhV6WyzEQzht94XemdxZ6ZrdxbApwX5KY4mKSX7dzN",
  "key9": "2B5you6x9iLmJxUJRy6VX7eZZAW6Uo4gHzCCzUHsSw8sHjJzEFp9j6MvwJAL5CKWWQXZFk6Z6FmiwLhWL9oGUnGx",
  "key10": "5ckDDMBF7BxR78zppXnyyJ3yXQsYeFR4v3s7eiY7kczvwhkMPkgenfRbiwrit8upa8mPSWvrW7uPKGnuQbMrG2b1",
  "key11": "5UrbkS1LtKYctq34dGTpwpn57xG9E7YJ7Vrnm3Y1qQ1zqDUF8PWXje8ppyevWNc6bSmSEuqzCVszZxUy8zkRCexB",
  "key12": "5G3fm9zNe8e55H6UzBGRg97ShTQPyqpTtnS36cKB6XjUZNBQnfv2wh6eF35KXJAvHs82EyH47WfqjxahfP73CrG4",
  "key13": "5XPN189m2gSWyCB7iW1Hup7m16x569oG5yYZwfgq1ZeeiD81uRqPJ236DH6VscsaL9mKA4rxgR4hACdvU1FP8NJR",
  "key14": "mTbpDxp52FCugPaDbfkR5mAekudvHdmnmB8aJPBe5uETnqgJk41nQLbMTTBi6b9riSuwusaDiC3TcE3LBaivj5j",
  "key15": "5WsiDg8CYNHySVNYUomeueivL3ZciHRnWSm74LjihC6SjoFbS2pnjztivYh2tp3PEJ581H6XdVZ9oksszPeLKU6P",
  "key16": "4peyAuBNhVrjWify1gX7mBDeQ9w9rTW8ofiZSi5TepQm9Q76qUgXs2Zi2fxiHcGD8w73BeeFGZUZRbAFTxrbAJXo",
  "key17": "3htQPfsbTax62pDotJoxb2KRv4jx6oM1C9pqzFLJsxiUHD5gveAvCfuGze5RB2GwLLxkjTZB4YUfsAV46RKjpT5j",
  "key18": "4J1f7grxontKJgG3tbagLjAouJDKq6w2mPbAAb11J8dQ7PKEVT6SiprNmAn7446nMJ7VUMFX8FpfYTRyTzsRNT8s",
  "key19": "3mbToNn4We1pntraqHNYyPbyJRV3fALe3WJgHM1rg15vYGRoyHT9jUib5RNjaJW1R3TPzZtvLsRi43TX7nuzJNvp",
  "key20": "2ZbziKKsFGWJZdaHDLqzKWtAcrYF9UoX77KAYe7GbHP5jVfxrKKgWRQ7hYbMqCKdz3w1x981LWfhZw2HCd4oWaRE",
  "key21": "5zovR3TdH9DsRMrfh4DmM4b7KAqXDvynRTER8XXh14rSQi1KTSUQEH4Axs2LBUJ9RdbjbXSc77mvavtz5c8cjcnK",
  "key22": "42cP7ryiWMHnG8it5qu3pr541iTM1BnFjPPZVuEczscaZgFRmPtEcf1WkR1CKANSz23aVeiiXZ62KojGNhDLWKWA",
  "key23": "3KvWFgwKksbZhmUQrvNc79nF4bwnKwoLpQknjvYUGVn2qt23nqTabhQWhaAhMEK1ganm5M5eDxSgCoaEtGaXym62",
  "key24": "3PQqN7EY6cyGPGef2FTaun41SttBSbJrvirtigbTUi9sGiuJj1M1j4pRgrM6F76zkPem94onWrTSXCwps7e1gbrB",
  "key25": "4pJD2cYYCi3isDEqp51Nx4G7Pdk7sP4LLDq4M5eAS2zo22u9vyjjTMApYvbFqQJECaStmZRuMzYAMHcWVMCjT5T7",
  "key26": "4y7gARv3EMp2f65nqBMeRhT25iDYqM26574j8x7MgzUbf9KDLqKUJkiHjtY1gPMBeBsxNL9Y4tCDr1xUZpuHZcyy",
  "key27": "4VsXpvcfSwgyDG8aFRZDSspJDS48thzmuwJZxEzt4XpqybMizyTwAFL5545LDbjmANWGotWjZEZab8fDhiRuPSAK",
  "key28": "YxzYTBGbpLP79s9w6cVB8dsyS8RLSAdrm5MgyvfYPUKj3UHeKXvSd9brR5pfjLjt7xJHJDM3T3LKtGkp1e7j4CX",
  "key29": "dgD7xcLRKdMCTHiLBGgSnLvTaj2vnzNcshSsBTBKKY2KPe8G8wMysdXoHUgYTfbeGiCwc1sZ8ToTMb9YgbUiJNU",
  "key30": "35XhHEDRkFrsnFaJjbRs43aDJFLGrNBvLpT3BqtggzkVFc22E9QVfLri4M7Bdt29aP4xKKLXwQ2ZnnPnMWr5fLRi",
  "key31": "hwJevKQNnzY9FjPi18fLh1tVfcuRRtKrfkuh4W5sGWWKWVKz1wu2mCc8jgkdMMRNG9BLhWCtJHxHv93788PTMpf",
  "key32": "5WqFfALnbN5tBcTyrxJpEt29s6WPH3pvGjqZAgDWVdhQEGABy56AvcKarEogYXefvBGsQBvrb8b4fRsXMFTNSNLB",
  "key33": "4wCoCnU89kTEUaFjfPigyoRg2q3UEuJFqf9oPkFQGbHHxnDVN86qGoETTUdKYw815zxsmr5dQjtbe7HiqWTs8NMu",
  "key34": "RowjjtMmg97rxwnEX9PD3ERaGHUB2tZGJHoDtw3tXnpeoj3hYiVaKqUCcomU5BtAiVvfUscUxr3Vr5Qy1xwP1mX",
  "key35": "3eVSWLo1cULfVM56nQNNZSDR8oFf8Sxz3Frx8gd58G5T3xgDLx6t2Wq6RVwchBvuJEJukF6urrD6B2V6497LZy1F",
  "key36": "4KzgvSKg1VTprNqmvV6FruuGexEGd6jFFHxzGqqmUK2AH1gzdecQKsCSfmd2fdcawzJR25dPkRBQ6E2X5AToXbPs",
  "key37": "7cUReofwZQVRXEpM6rGPBWaPHP9Ewi2ybtxjymuzxUGd5PZwEgACcfEAMthkMH4XybBFNCBAX51XgektQeBHo9P",
  "key38": "24GVj5QKbBFLiTtvZwnpRxjijcfJ3WNqe8FR5DHPEVHfukQY17vnm5ak21kimqSXNCH4ieSmGRY7RBGEBQgf4vLD",
  "key39": "4LYMJhCoQQJ7cRbEjG1gDHtMVQ1YT6Qf1MwtXzXcovwkJog5c98WPqHQXr17kfFtR7pS8ZxGzwAmLjtScpRhUasp",
  "key40": "3ozTL1MB3U2dE3roXnNEVFbZa8DG1q6VLmpW1i8mPvHz9CYrTLCnv96HC7zP2vRS2E6zNFPsZuda9zvtAMT6xv6S"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
