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
    "5wupTyX1LhR8saEa9CvrEcA84NM8MpBhKPf4zH6bkcUS9oZGPYzS4Lm1b75sQtuafphAFHFQae1E9kA9KVkE2ZSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fhAF9nR47ik6afwS7eKegQDLPpdGTF686JRfbzZCEfq9bTg6fAbmiHtuDxj831ntrmzDAa7YpXSKRrhVsEUiEBS",
  "key1": "3dBYrngZ52yWVxMYcEWTLTnEMkxL8TRjxe2cstjT1NtePSjqM7hLDstsDJSeyeMHFR4vqQfFsfnA9cGy2YiAc4S4",
  "key2": "55Rd6Sy6gKQsJEGWs6xPGyAyu9FmXB1jTzMeK6tCfcVNAVcG9X18bDipG4rUnDuhYoUcrtKCY9yc8vGNLCHoQ2iN",
  "key3": "M9dZLeHHgxtoufQ3MDhV7m8mYtLPyv7SLUsBDtzn5NNNDbxkBTuK5Kd3JjEnsf5d1U1VE8oZ1M2ssapnQhvriTF",
  "key4": "4Gyg6uVLt7pXxLtG9NvwkZUPtB5Dq4jo8xeXK8Fcyrn7w2UA6AGpr87c4DYrfu3KdhehSC11JAdi61agdG5AB6p9",
  "key5": "4Lez1JYF6kpp6RnCL8pcdXhwpiALVxRMYcrKbYgQUTbLyjRSbUfRJwc7ZV6FRa18Ag1sXbkYPejwZBZJzSGZt8qP",
  "key6": "4U5tzh8D2GHFocrmNkH6WL377DV4yAgFAnrXHvWnDTizSwYoLt7LAstZJYYk6WHSssvExhH7bWWn5oxjLgkfcCpo",
  "key7": "33vC6LGHQrgKsHHpDx7zxtYrCgosWhNyCFXzwTbdeZDdrmvhNQ2TcVkbmSnF9b3Mx6nqg5epVPcZDqgGcJXno25v",
  "key8": "dx5QNkv4PrUoiTAn78EBvk9qBCH1u7eyaQsDz2uuZzmUYStvvYDUrYgMai2WLgW2eF5oXjJWhPbBmPE7fAqsAdV",
  "key9": "2FLGkr2rbW2st2j2FyPmFywGwtmGiHGSt5qqokGNnG96cEqHLWF6yjHos2gsP3WGR1oPfV7wy7ysJmEWTLtzPrHJ",
  "key10": "hwJf98XCnzFz6FDJkMHp19XbaRbWEsCvrpoahKnBsusMq3mmciBFWG2eV6EPhs5GQFAkhhf7TG7SJTSWbw7DM97",
  "key11": "4QQXxw8RDG8SwQ3KtLSAvUpCwpvchHfMgyceK8FrNKQTgYGLX8iD9WHdBbEEt4HgHT5B4CWyT4CARjv3ccZuWdME",
  "key12": "5op4CEtx21CbMowrDH8FHHCjx5MmF3ZXg2WqquyF8ksVC6wLCod3eXFaXk14Uz9oMadJxSdieHBoZexjcYaDiV9y",
  "key13": "54YFBmxxFdiLkKkkGUuMpe2xuQ4SFZ8X3oYP5smqCn1eV1FHFzHpVPehb4qw2BWghfVsJbpxipje1jaHXjjPBWrU",
  "key14": "TLyBjFY5TMC7QELyMg6jTP6mZg7V7AQdYfCiWVqefn5c9NFs9aP6kvwLhVxHw98g3MLmhLnsVg3SoUdCrheBuru",
  "key15": "3s4cwqueR3HZEx129BbopWs1KApVm2K9QPQW7z1pjB41mRvM1U3CNq5q9afWFMRgLgHZeSULKHXiA18LoajuMvDA",
  "key16": "4395ivU9HZJtv6izVVMZsd6TiTogCmTTWhv5R8bQRf4b58z6LsaPMkYwpTwMVza8B37gj3AWoZta8paGs911V4jo",
  "key17": "4bGa7vFGPVj6AG8EYjDFezujMZobgNcDiLqP4JAuJkbbbXcRAzSth3DfQMmgn9xoMUpjinhXkJ1uh14rmjyMuTMG",
  "key18": "3vxfaNYo6LminusSEVY5JykaXTrvcQqkB3q7jSZxQxZt5KEjaY45BNMDfN67tuypFNUfa41NyAMpKDHCjfZEgV63",
  "key19": "4F4CmD2dXUNAjhrs7Zc78fTzDjzXTpLQNAhWqprjtosBzDvEPTeoLCNsc2o8KHR2XrK5uK1wHeoXZRbhAyPWseYo",
  "key20": "32AB8r7S7Dnen6qumcsnEgHzYkMLXGfmZXrTr7BFQxmwRTNmuLAXfg4KhPrkU2QaBQnPmA7cXVkQbpG4RvSSN9Lw",
  "key21": "8cPKKBZZ218dEAj2YbXBhLJWZciMMhu9RB1KNzPJwxm3p1wZjifqnSwghBGZ6Db5k8tEmMdyrfiEZDf4mUuoYvR",
  "key22": "4VMuWYAVzKejCXrDQMai6CU6nn9Fz3KCLAJa31Vx7Rb6uLVb6dRjmSoeBEwzLxXJybNocYBSNT5v2o3CV35B8pU9",
  "key23": "YfvyBgqDSZt1R4VtQYTqjdLFWCAt823AThBkCjzEChu2yWYhsHfeT366E1bUKoiTGeKV47UPV4rorPCgEtLPM6n",
  "key24": "4RhSQdZwPHciRcz8ZES4SjiBGdao51Nui9i1HoJKSNase5A61497pZUWs4ukiJo2D4zDCBatP5PYxsLp49u9s8xj",
  "key25": "3nKNFeLUe9wTropYaBrY8dKRNqhLQB46P8TGtjEnABnJR2waFEbSyPuoY6pZDQRxDVk29Bj11fLP75nNwMtLKAJh",
  "key26": "3cxVnCQms84yK99nob2dfss9sHaAea2Em4RLH6Yz3vmN1VZmReEQb4SvvcRt5b8iToZScqmZWoq2PWH7kMPRoJFK",
  "key27": "Woy1gdyxfGgRp772SaGWSGCxmvw2KipzQVjftKTH1qZNoNutC3wCLbDycmgwdVh9cCKz5Aw6SG3QPdngoMsA7F5",
  "key28": "5S4jEJpgRC4a16LkRBWzTQ9Ge93TBHsAGZNfcWPGPANEXbmFy6a7TRttxcaT9YpV5o4WvtUgt8rBR28cziAQUiYB",
  "key29": "5c84pWhXPuUN1atjbffJhoRW5XBejXdt5usHqLCRdmqyLeRDmKUEQArU39zHrEbvv7Zuvt63xF5VtBpjD7XjFExz",
  "key30": "5hjzViekBUDmYyBEBo2dfp134sBT1YkLgZEBBwV3TMVzLohocTLDV6stx68UdfxusdeiGyPaziWB6Geu7Bgv2GkF",
  "key31": "2b85ymJsjsMkbM8sZ19b36BSj8KRAMh9De5cLEV7kHyZzTXxgeg8wEqmiGoZFCsqCk4LadeTUUXKoSegd2Rev24f",
  "key32": "4J8UbjwTQmf4utXerGKQJSEwMbK8y4vRFdeMLS7gKeVZdzmz7Nf1bzoxDT3NADG5jqNEAtv5dkDKJ7CSMwxwXsQm",
  "key33": "616MNAPZkah6Z8guhLf7qS9oqjRbYnD9KTvAsXUP3rYVdig8MiK4A4sguBofRrCP1QjfPRNWadWo3PBBJcYKCQ4k",
  "key34": "5uCybmtX7okeRstFpHqL6xbtnd7E4ixg11Q1EMX1KhEuh5zqXH8z4rm28JkBC39SWfSnXwkMbepg4KE14KfFLEHc",
  "key35": "2GUmsVWER2wNTj7MAQQmHPbJ1qNtKXeRX8QNq3AN2vzYdmb9suwBmm6NGoEQGBPJCNj68nJ2n8wwE9huSEGQrHMT",
  "key36": "5BJ66dDsUphyU4pg2yY7tc82xfBijsw3xhHQSfoCAQUzNrRrWvhi6dm4QUmwPYF5NqrUQrAvq6KiCz1UspBNKiQx",
  "key37": "5t1QVQGhMjrNn1SEMZtpRhyX8A1w9Z62nGgpdzcpco5oCiTTCjjhrs2hQRkwFKFgUeH9DFRjUMGUh88qr3Ein93L",
  "key38": "47jrVJLRpEnE76nnATutbv41j9R2ydZVxqsdUu89bzXmB4yTVYFttAdsNUzeW5ydBQ4PmFW6zQENC3HjUYKMPFvg",
  "key39": "2iqdLgtmafqYASVmqv3aAeTvMHC8uakjYmT2ixcFAZs4ner4YKYzB4PX3719bWyjGsrH4T1sSh8RVJzbAQWJ6uZM",
  "key40": "Wris3BXtukbzxkLTBKisgdGuTbjaCzU83C4UBM4yH2xafnbkkgCZpdisZ1E9qEfe736nhibktETMqNngbDstoo3",
  "key41": "3rt8owW1rt5gVRrgKmSUbUQny7ma3vHJcypHd7m1c9hjEW73aS1QUnDKiXbrw36RQkiRxWpdbZR9DLJAyMVYaNgE",
  "key42": "2De8yN6YjVJNyhaYJtQsU8CRWwXD9NUjhJTfpL29EqnHa9jneAxgj7VAFfPJuCrUBmGPFQv8uCHTpQGJDcm16Awr"
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
