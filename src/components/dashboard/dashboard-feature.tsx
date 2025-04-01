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
    "2tjXnjnyaEeme4i5iYcNbQEzPdv8Ha6vtV3MHVvPfoBRLAGd9ryX7fy9VnDW3muwGzJtriVX86PkLWpWpUVzbGGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kvneCuufoq2sWHzmQxoBWhBh1DdGMWQzvRkayGK2A3M7JoQorrH58cnf22pnkR85ENdyDxhbmcFETDW3Ejr9jz2",
  "key1": "wFZJNkjP8AJM8ovSy1psdBSHqw5tZ5TEFnynaDediTLtetqZ9AZZdCdfhnL5qifqWvyWNsHzLmvXqk7wXeiQRMp",
  "key2": "aYokDHcwxMszMiwfkcobBYV7Pm1o9bHxk94LaTkzg7MSr9o3yVr1aWJEKXkcUkbc4nN1jRyoeQFVqzEweVvWdVC",
  "key3": "2zya6sXW4BEYXKAMKjQuoPmiTTwrXN1SNk2dHYfxR3pe23mZwvemFQxN6NL7APfYDawp5usRmuZAdVNi6PxmuM58",
  "key4": "67WkzCYkYy8J9UfXbP5WXLdvvFJVp1mFj85CzdQS4uUxaUXbpqEBQqF1yMvYfCa3ac3irRH3xSQkRpRixibdmGVN",
  "key5": "3j7odUaRsQFD7NzNQfJFEwrJbLRUtoSMphHwZXQ6sexoimD91oy3ZoU3VUCcgzrwgZ3tnx9ywzgeAXCTX3LubSRV",
  "key6": "47ZTkMZGwQtAverwr4hoj9DzRJnPon6R14i85bBwfaL4FcDQm6qUJc1B9TgUUaw4a3BUmqmjy421HYrZAZEavKRz",
  "key7": "4XFV1NLHHMvA4S5ud3iiz15FU9RVedsdX4vnVtbWnfDcrawLQEr3oCP79ssaSBTe5WMaqgzgnuiS86QxkNq5rFdZ",
  "key8": "2x297TkcKV7D3w4WK5h5rgx8bUmMVZ4hCUnHDM6pkssj5K5cCF69pknFbtSkMnyMSXWr97AsDjkCrXUP6FjWK8D3",
  "key9": "5DtXuFdG3xmtmVfUZn1Mz1EBN3ZnW4E6Le5JHfeMnRXARSxs7Cv5HDowjoNhZUAFjXkdUWv3KMLjgsp8XQ3hwhsT",
  "key10": "2smhYi4v3p5hvBvCWhxQYQ6xCDCXE1ijxtPeNAZrY3kkHwd7EcVLUYcx5PqvUDDS5TV2AsoQrC7nQccky35cgFNs",
  "key11": "3kLEnARYLuCDokqEXvGNMvybPSJCt9F6r1EbXKBwtmnLXUgkZsa4QqgxTPFjyU8RXz8UyaoJPAEJEf3vWv1VmmcC",
  "key12": "2shCQZrBjfSHf9pXffTLdPUVY5YDWCjs6WLuG2Vmdehdpy29i1VTHjwC124MoN6LAyx9ngZh2pV2tZX1HkokGH2T",
  "key13": "43wbG6Sxe1mrPCS5bVGq3Yhvd7pdkEnLfrq5FE3Xcg5Bn4MhQeKZwtRbgiYKV7QBgVciv8dHtYaWuqqpzpJ2AnSS",
  "key14": "5PKkAzeJJxn9e36yxJX8VGyFaayiten1x5kwBPUv4po1ip1YQLK4RXXq8tENvrK9T44sCaLCJ43a3Cgi14wiVLiH",
  "key15": "2xSGPjZv4UWoKdNJRvePAnpcjEAxH8gpwsjbTgVwddAvM3jQnYNmiv1L4ekW2sYnVP2e1Fsid51gNeJqcjcirqz5",
  "key16": "5XGwriDEFJ6dPtpopMPEaCMvb3WxJZgMCF8ZZtHkxL3uM7z2PP54b4B5pzEiQMvpYQEU67WgqWL8qvWJJvJebG2m",
  "key17": "ErtWgtkN2TnmuwF63U4KugdtZs1pMipmHAnqAv9jctZSZFhVmEnTFTYALW9Aw28dWGxJ6CAwVqFQnAXTkHzxK7a",
  "key18": "DsTCik5NmnXfx4VAFX7LEK2BKa67sr9PS2CnMPKf53JUHNZV1GtMRCBETSdRSVpSiQ4mFiDLp1NhaZcJ1WdZDak",
  "key19": "2ZYgRsNF5d7hRqRqS37CCBKtneXhBwP6BSdvXUCVp6aSsMfhaQzumfzhH6W5ByxHjeegJEb3dt3yELxpdrsT5BSC",
  "key20": "4sX9jzpWyUaw2x6TsQjDntPJ3k1vhhNEjsgZp2ozEJyRUFzUBED8v5kiP2uKBHJXQe2WoQbj12dEQPycVzoMJvw2",
  "key21": "CyqESngBPSUEsGZjMFE4XkYYWLyFsBLFwaVCdPhMz6xCwNDjTkX3G3yUzhcVY5gyknCRSMZUT6Ms4xxULQatdLJ",
  "key22": "5ucRECPSWB7BcVvdsxuHJ2o7RfXFMSQTgz1KBbfKgGteYCbZrZLWbK9ba6PQoyGSfPAo33VSwvW5DV8YvoVC8kc5",
  "key23": "654yHQmfCZtReHduZHNis3t64H7wkpqfjvchiLaBFTUUqixTLyrSCkftrgJwzynzVCSangJ2JubckmQvSEa3URV1",
  "key24": "5NjQEfoRBoSTPpVZy5Pks6Yep1UBRX6xbysvZX3Fw5aNptWfMuqnX6Qk4bdrT6QW6TGv1Wt8nhxCJBZ3S9QBmn9E",
  "key25": "48PY9qZ48rBzpG69TSQXWJ9mg12vAddKVn5RKyiCEFuQC5GF2CDdZfGhnbyDnDMPNLCf2AnarVvFLoaupG6AgKM4",
  "key26": "2H7qoXLiJWGsKCozfz8NgRHwrYwjVFCJGmPPyTeoSwk8DdEy9CP37bSNPgXFy6Btp68MqoY4s649U3oVhvmD2bPv",
  "key27": "2HnPLCy47VrDrNpRwJfFA4sssXAzkvRVyNTAcy4goS2zRLcZ8eku5e5n1rMhKg9McLuLx1SMBymcykX6CYmE8zNG",
  "key28": "57Bcs2ne9wpmCbftifxBjHz4KzMp3oLuHMJo14MytsYVXNrTUbYhueiYp1r1azLBZWx5wMXCwvvU3e6btbTRveVt",
  "key29": "2N3xQRpBDJ7fwKAeanMAsZBu4wPj7YTFJTTev1xaL1X83Yn7ycQSz8sbhGnyEzERHfV4FXrsVczfvco8yvyMuGrF",
  "key30": "4cFyAVZ3u1Ug1PETQqmqBtJ4S2xPFeKJn9hYRzwMynqVrWehyem7HS4GNmtEoYeQh83mJ7bxpYshWAPWY8P6Tx9Y",
  "key31": "4qXfKhejTPZ9AoX8DjvkSdfcchEeHFVEP9FdrArTnXcPACgCMmDVqKaMjzDCAmQS9PQ6PWL9pLgVSPPabDzPiYHM",
  "key32": "3PhRjYXDZwzF7oxmDAHVw73paURnE6E6Ss1ZVEBHVmrG2WkSWjhPDSU7zTzwCaggNknHBwCrWctuwhfDgi1fQjhx",
  "key33": "2qqkyNSvwTt4JMEtrWnAbD8SAtNLF42rVZENPT6xxhbYLHz2oANTLZs1Hfjk8dvDnx9ULgkgqnS3y96swvk2LWDR",
  "key34": "5WTBWTRKP9o68UfWtZpJAUCFTxuz1vSiBEy9k6vay69M66Y1SQcWaXqYJje6aXm5EayTc3gKFCh6hTzTjyPieyXQ",
  "key35": "2WW195qK5Jez83a7NNEGR1KjQ2ZShxD9rxMFKuZuYjXMjProj462tRm9Y8gCNEjeX3E4bBGdV7UibQJppg7b5qXN",
  "key36": "2UBkqsymaJUm4DdJxEDxtigK7Ai4EQBaMxsh1fR4CHMjucmo59Zi1DcQ3o7UC8fKF7fChiwigiNqdjxKVFnQ9Yp8",
  "key37": "3tyh8wekKYJ5i44vPfhaEWNq7QTAjQKDdL9nzgZnor2fTDhDo3cyi587rVDD5QkT2imtXJzM7LSVbwQMr1CYEYK3",
  "key38": "2suWnLvUxsa9VSbZYeFoQWBuftEo8pe7m8LfYbtgAY7tK6Xkcq9CRJFBVnyoKaR5DKHp2iMa4HQKWSNS9KwBbZG7",
  "key39": "2kdKuVJe6ME4SqWS9isYTSU4koYQRGD6wVitwnR1342o1ED93mvwe3N8km5r5PCXKfybJAqhPhZcK6m6vsxRoSsH",
  "key40": "5ckq1r1NK67oZ6hZWrZN2cjXTCJAtmywckWXEw3wBzR8HTdYxp2NgXDQA5i6324aEnQg18LhXzLpAn3uPHDH8Teo",
  "key41": "5EfQV5CX6JyKWCx53m5FEBPGALyUg5A95GqEzVZQHs4iEPkZPNejwUez5b6M5QbqsFgPnw66p7pkko4ruRm2XTNU",
  "key42": "ZNQNfSQVtz7G4v8JqMeqytmd62ATh7yj1djxLA9TqXdjctiNEVSuw2X6faZMiq7bEmSqQPaiUEVLVUQ21sjMZBF",
  "key43": "XP2v2MWotHfY3Qk4JS25VrayH49rFELSmnFgwLWNqv1YMeFGtypiVh1d5zV6BQYhJRzUb3KYDxyUY47xNLwrtHs",
  "key44": "4UwG3wkFHF9SoCuGyX3T3e8QPshc1emFiFSJ1MsYPZnvgEeSimqvTrJWoEtuBg4N9MvyE1DadQe7iQGiHBWso2fp",
  "key45": "64VK6hV8UWPkoGgZuNECMKzdWsookJ4bcFhwHdjVYGcWaJYfdrBMHmks5rG4g5ZGVdoXDv5Zd6qMfTr2DbNYzbap",
  "key46": "3BSCE6VRk9g2DqtHDptQoucFy12EdYZSzR8mrj3hb8SfXABgddJ3yJUbhy1us7eCGfFXdbCAefDobCxPzP9PGqn",
  "key47": "3QbQ39ZmVNF7zTfJQ2XBBUFyJggpo7U9q2PDiY1rddu64JEaVBsPycm4FDwvLvdGxrHmLFAnUbnrGcqdQYqgnykK",
  "key48": "4NSjzjczbtp2KSopcvQmRfBFjdEv6QasBT9Dpqdif5hvuPkxs6ndBKLQVoR7ZJapHoz6YsPftZevc6EzWob1nPZV"
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
