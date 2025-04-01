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
    "5Pia8Bg1SPMdpiHARuY3U4r9KTGavwN1sbih5h7vAYRopu5p7woce6SZYebAQtev6PfgXZ1BenjCcW7yKF7Eu58e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZXpi68ZjcyVi5nFWE1rHXystYFuebakMFK4YH3wZg4r9ndob6crUbiuDVyseKrJyKJj9ARahZ2jf4TMm5PZ8Ps2",
  "key1": "4vuQaDaMVzoTC7JnsrxBzXPrpRKMnKCgriEjiTozNBegaGiSfx9qrGsxxnEhzEiiAdvzhNQxK7dw28P5nAxWjGT2",
  "key2": "2wBNgKAq7EyfFkq8M6AEEmAkGzphCJkAJfjE1QXssvMTq3cLhcJrh9zpjA3PK9nvwyBKaG4FfuMrd7nr68hFA77x",
  "key3": "4YvAoPAmtmPSxEViyJuU2PBVCH7t39d6zUC6Y2spgcfvNLH4ZMNdwxT5GS5zxkcwqG42VUbFeHVypFS3Gw4VSa54",
  "key4": "3i4n3XYMxZYA69TjVGaZYFHLFDvEW76mBrmM9fod2pkWf4hBFz3JDkaTrgAsYXUadMtt4GBUrnjVUPUMpTcbX54A",
  "key5": "3wUvq4rWRsDSbj3E4FhijizGsQgYCa5i8SCV7dsDyvv3pwQiwZUpMXrbDM6ttZnJuJ4W4DQfqfZe4YNj8Ch2yG2X",
  "key6": "3fS35XHGqTJiDrDFBUoRFhejDB4jLx6XrnoH6aDF2KxXPDBHPxeYDbyyn3Bibz1aS6LVAviztPXT1qQPhAZJGWxc",
  "key7": "5Jc4fhwV4FGWHz4TSRAtDNUherUH9ijwVDN5br4KuJRpRUQFbjdGxftdicBwJuvTfGZnGdrEajogzm6zagsmBF2F",
  "key8": "ugNgxCaNv3XbWwLBFxfP1cmUJnpAuwuK1ybDjNwyZw1DttsVVYLEwgPabQUBQYddru9msccsdMNrhyW2Ymk8hq5",
  "key9": "3ZSmYdeZ5qBTR2eD7nNfsmu2LBeh8A9KYDnT42vkygsc93ayprYTKNX5i9tvyfJcKpSSSdMhq3PYnEcSuAZ4B7Vt",
  "key10": "4iyp91PVfHPkzjbNdCAWRTWWky76wNBAtxobDNpxwQHuArnyvEnykMziiaiQnQN6guAM5ifjwjF5tQwpgw8xsoum",
  "key11": "4caBjuEEJgv4JvK2w7ieVPS2385WH6kRGJkJj4eVoZVXMuztJim7bmaP4BSU3BMHtcHWE8Msk52CJhyGburPeFbK",
  "key12": "3wd8gGVCeRiRrQR5EF7kK1QfbcA5gHJGc838MFugoP8L4Roy5HNvcefpQitk5pdc1mwuHtKZiSbzmu13rvVsb65g",
  "key13": "5XWGeHYRGU39vFqew5M3Gsej27LMxxgp5ArgNMZbHkG3cNjumTZe9goN4Yo6ab5Ac8NaJ1S1gLRqe16Upxyz2Mf2",
  "key14": "5VKxTbDuvbDJbqqeksR1hq8svNLuKZtx3dotiwBwd2vokTs1J7QPSrdqggi4oZqNneWLmFE9di1Q9Czo9tVjGyR6",
  "key15": "4zFqwUy8GTTwg7uEzYu1vRRAszwoxXrRKAGWADe1TiFwPeFyQmgdm5oCjS7RX9NwPUq5tyJDYKD39Dj5mgdEKyyi",
  "key16": "33THXSbHisDJ8i4a9Zau1LnsYCQdyr3drv8p628jeFoTK9xEExpnACFGodtDukqEScrc7XBvGVAq2bHvgL76ythK",
  "key17": "3cpViq6e9xJZbaQoXz6fbSoTN2adsVs6hMFbPBdnLjLehLq9s9FRnf3Lre99qP8BnLqFmJXQhGVQxeLMgRd4jSiL",
  "key18": "3VmNBSaSyu15L9mDNFk1w5ydfQjFQjJ6MvoATEoskJThji1WkBJMZg169MNvPCVPSxgunM4veN92Te6u2XpStGeb",
  "key19": "5m74FAvmFKtVLu5tbWV6kxscFwS5LuRT5efp23gxKwc2xKMC4tmqwBTdFaR1fMryRGjU7Q2hGvsJSEYaKKhZFrJy",
  "key20": "4eG4yiqcLZJzsXJfMtqpQq6ffP59hjNgQU4QVubNLEvS5suD1pygBLXqjdV5NAE8ug4oUENzXQX2crafXrYVxXxK",
  "key21": "2ahgGeqorhzJSgeNm5naoR2dKt6UGC6MJekH12SibFXbjrWTaNh1BQ2G8CxYQCcBrfFS6fyYp8yJdCrCC1rt3hz4",
  "key22": "44sqLdJch67FiCSm5exyCCTCarKb93P414BppS8NuHG2fuKqjZb3qwegTdaktTo3pYL52Kid8mDootxMymxvHcK5",
  "key23": "4xH6Nc8zwDyMhHGx8DkVVim2sK79ZPmq8izqLeLmVRk1DaXf3AFtp9fTpP1yhhc7SZkxwrdUrE7zdaxY6q2SE1zY",
  "key24": "2hZU2bw6PoGhi8iSw67Xqc3sYfREwCxvoMbEW2CYfLPnHF8u8Q6BMBZSeq2g55LePkWSgnBsKHCVDARdBcBkqykR",
  "key25": "3fDSHBdHuyV9dmRJgAcNJuyEtC8v3mfAtu18DTJNzebQnQ13GSDLiazBRHVMqCdWDVNiQBkwKBC4928fcu5ckh9X",
  "key26": "268MsUqK8hpeZM7btpoy5LpmkNkdJ7M4Wi45JWd7S2kdvk9YQgN3RKMnMnPfmWFuM2Uucj9wBxww6T7AbHeWHBiN",
  "key27": "qz5kRgBaE6HtxdoEgdhARZdaww9ojxg67ucw6s23bfmcnrRTPmx3LDPa2mnnQoXGo5ZwFsh4CjhzEMvxp3oFojr",
  "key28": "4aFWQkDGfuLX58jFnkCcxNy9B8xpXiaMt2WSuBxVF6dqVGW9MnqEnokAseexwkXURyJcoBJN69sKcyauaU6CHebD",
  "key29": "3twD1y455QwKH2JLiwSSfjq8QQCqjF7nUP5XYVDnjs3eEMcHWuiHYqvvr86gEkJur8bgzGdgiQTF3Y8cCrMcmYmF",
  "key30": "5u59tsaVjqFX671CgHgAmMMYkEkKPBexDc7gsrxyHxAakCrUVp1s4uzw9vU7RLNo1FckgGyned36hUKqCvnFoWBQ",
  "key31": "5LWdR7FEfuikKQJkq7YABK6m4x6vTSBcQVZcjPdRqz8C5riJnR2soUmpCyKBG32sx8dKLcHYgintgVtx4Ku6oBcx",
  "key32": "sVeEDeJS8c5tGRCNq9PtanP7WPweHdia3gabc4Kru1LwQLyysdpKwXMEk1g8J1MRgFbcLJ8nH5CcpDPaiLMo96r",
  "key33": "3Dx7V8efKrFVy4WinCoP32Gxj6z31MVd6DSgZrF6Sc6dJHqqkjWpapk9CQTxXLsQYUtgnMDmjvodjTnSzbAaJ514",
  "key34": "3ebbxn3kHhA5fJ3XNEQjpMxiEKJBkzRhRzcR5ud6NfuFDxUc4hrDQJsYpy2nieS5EJ8UCaXhJSvhJjRyX71swgso",
  "key35": "4qz8Di72UUwR9G3D7HSn6waKa9kxAbVW7YErhDeCronF43vR5WNn453o5gVhCGuz3A6MAXeedt2zejGA14AeQCbZ",
  "key36": "47494UwwH5EevCGTVxWyQWy21PFF2aXL8ojBwzGoUkzUtu7xeHYsT5WAFWyNNYRAJNcF8H3LDVjZyESt4sMRbepT",
  "key37": "2v63pjkLTWdoFSFk7RkyfSTuNwarjgE5ayLsptGScssbptLHv1f2hmxJkFxMtowhEaCrc3j1hE9wQdGJkxKdNKzf"
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
