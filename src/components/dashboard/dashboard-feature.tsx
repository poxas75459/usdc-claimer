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
    "wezRNJMTbDiHKML6ZWVk9Y3WB5AUKbTg1kCKrPbzre9PWfCawSdiE4aaGu2KA9dKXn4WYDQiD2UrfQEun3wj9rd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jv1iPfaSA4TQCRV3Ast6dnqVM3p6CpaArnswmKi89mskdQ9FUmdTibw6ApgoMMvzQANZcMiHswCLieGaaEQb2wC",
  "key1": "5yiBaKkY2XTEAX8r47WAUuu7aLr4CJtf7fyarAfwuiRwRohSBjJ2dwgtBMi8XAAQzX5vrETSNM4ZDoHLVZu5wipU",
  "key2": "59SAgpWMFJPPsR68rfeANgPy98EFV1xfAUJm6JSkZ6HipNXUnaDRkL1uvPQXKw5Sb1jCpRdAPygGZhKr9JUmKKGh",
  "key3": "28t3RqbpC8spsQhkGQPonngdUzqStnQXPuynat2FsADQrWUwDnY6cRtbZaWN7zMGvD2F7WhA67tgXXHGQkdbAouU",
  "key4": "583qtddCWjbKJ6eadcqpt5rpvAVNc8aDzcwxGeSbwHB7iSYVw5xcQqg2GsH9smaYmJ4RadJ61cJrHeCPoGY63Ycp",
  "key5": "xmShf659WtbRHVY3Taay4nvgBLPXGCVoApb3XWELJaaDK1RXJeWMZy5zvcMHeW8KXmSmenJoCevZAz4mrd2BKZQ",
  "key6": "P3nJzLPR8y6RQcK9cpFkUQdUkwksHJ1gQjNTdHW2UxCNLZpjGA5byUjZdyQcDJvkMwtw51PAyzshdQa3pwoa6EW",
  "key7": "2ynGFEQjG2FYgaLg6vBCEXUdAJYCDSwz1YjZd5djKWsVVsVk1tL6wQxk1YCEXUhXUwrCrBsp16x4XYTiL2UKzjxD",
  "key8": "2WBTpCQmCG4bGZKPKVNN2i8sXs2M5NNEFs2cANXTo168WVPoenejJPPjwdvzCXB4YuQczVWtg47LKBtKGFXWLzM5",
  "key9": "4Ezz3AzE5nhzWUVDEAx1rzR3s6Fc6MqVxXhE1upVt22X6M3xkLbBXCafuWnsUFfh2SZT5C6LTixktPYe1J3bPeuP",
  "key10": "6299gbVtezBM3NB4nwUhdbVk4HUWZrKyAaNUyWMp2Pru3UU86F49qrkxZFnTWWyDqVDHfwcRxY4sLUYJUxHHC5vn",
  "key11": "3khfK79mkrJVQfpv41Kkz5jE3ELWqEgJk7JY8XCoL9TJx967S5TnWwQZXADyie14DgybKWehFvtvseJ7so521DbM",
  "key12": "122JDJ885zPZsgLuvUmc5vWVQ8KJ44jC8Nuh23XZo5cuWmn2BoMRjvnXw2yLoYEXdnAadmowfgzSqs628N4ZkYFK",
  "key13": "MPVZr8yRurgDoBKP49QTmYMRNyjB9uGC74JzeujeSMsCuRn6cWpV6DDomy4fsmmk6yYx2wRr39XxaEPB73iP8XL",
  "key14": "2zavaCXawfzUYViuHZX7iBtg77NAEGv41rRHUgR7A71nTCqXVRscHJb24Gz5dekzxmGsbmHhURpKwoeHmskcgd6x",
  "key15": "4hVxKe8wDcezLFnuwTCM1Enc3JcupqfUcVDKXUMNEHZ9VXs1jQvLfRajzJTnmrukgz3Yu1u2z3kQWttufSvN1Vfo",
  "key16": "4gUayphq62XJWFiDASqZpKd4Qf9exC3SBoph4ZRXhm1g2aEfQBYBVZYNyP52HL1QLBu22LfcDPLHae3dCAypNGor",
  "key17": "4qFSjjUGhB8taZnHa5nRVmNadNAZVcJRDcGoVirP7LhLcTmQBFdw5EedNtVBnk34VoAh9QVDhNme4iU32KtMVEKP",
  "key18": "26HAFfGXaUHfntrQVyDM6LfAGuqK8KHuJ5n5fwDD3XrtrZitDoK2dUP1yHDiS4sxeyDzS1RzegcbAsp3pJR92iFD",
  "key19": "4v791Z7tKCmQDDzYqTJ671mQyafbBhotoMxTPBSWU4dnR5CcF6um9pnRuR8Rjv8fiovaY1PZbEbbMjvZec22if7V",
  "key20": "3zLZrvyfWwY7xWFMStLCnRrtkvpKZCHqfLCspqf5bH4YLXfmw55pZ7VoCTveLDiPzdnZCaUbTGCbpVXqcvKYyagw",
  "key21": "1sLZhe22rZnuUaJVnfrbXXHhcR38Jk29b9csphAX4vcEVtJ4HZDFaEbT6LAqvMZCgGMHHLraQ9qg92w9a6ESvSi",
  "key22": "5SDswuAgxgyaabGUtDXcbBJirZmnDaudiqePXXS2icMx81cMb28QsE1zxvoFgEndWs4Td6aKLWxkEs2edF7Rjwsi",
  "key23": "QSRdQvtoTFqg1w9KfRnDjmhCD8MXYDLUP7av5KGquqnsJXoKSL8UaNo6ej7TvamPqLsHjnPHFWd7MoQQdQeXNXV",
  "key24": "2ghAcqtmNJQSuLJQ7D1ZG4zNU5h1LwrJimXfApajHwZ6HNw8pK3ZPdFtKo6rVebuvtnZykZGZCD43b8orCMUL4M7",
  "key25": "547uXaDaqNq1cH8gMoBJBD3n9UQU8KHJgL7M8C5cAqah18tLrMN55y8qen1rTGpEAD521UNhSJ7MKMm8Tw887WMw",
  "key26": "24t54v5bSbHAxLyav5fwCGyGMSR8B7Hs9ygysBBXpPGtnDr1cd2YCdFkjJs67HsSWcLEcA59qWgstwgcVvZzj1db",
  "key27": "5j1YLbAsvddANFWzkcjWnjxGJ2xMQzfF2Q5T9roXR7qGu6X4C7xHWHWJPNsvu9odbw44K14QU83ggCFgJMCfVRc6",
  "key28": "4Bw657AFCrafxLZLGyw9UQyUyzx4c2Vv9MYdsFHezLrwhVBah3anRPiY32cKWXGSPs8LMKt3gFBo8Pjy8byBYQ9X",
  "key29": "4ZzPGbZVTj9M1jKiLURdeqDNN5829vmtSiTfWg74T7KDajLGR51o9Y4YPeEMYKeLgJuENVupS3bCaRNc3tK8Rin2",
  "key30": "3MrUvdqMKCCzsPbZwWtomB9LeCvjSpthz72AcXLjaeXZ4RPGc6NTXsC9dkVjgpk1c3Mc5uD4sF5ApGyfntmo7sH6",
  "key31": "2FRHFifRqPGrEpEMLvkoebngvoA2FS2WDtpkZfckrvfSfExKtZUtyhF9J67BRgqkb2x4G4DGUShR974YMYzAKSX6",
  "key32": "4K4jLK9CQsDAAv3gG9ojKiYMy4tVZKzj6UPbrzVSTQAKGKwyTpPdohfViq1drj2kJ9ZysmCbekhygLAmyPrvt6o8",
  "key33": "52p28UXN2FuX5CBrcsKPNjjhnGAERsp4YnMm7wrbaDqTf3XK9u4hopM3jjeDJMqoTPo87V37NUdjg8J816naHWL3",
  "key34": "5oQRaPZPoeunShUHSNTVWHju5mCoH8s6rhUEr2A1yM188e2hoQTaiG9pwBcr9Un6RfPUZgHWjQvmaQDYYHvBwBPB",
  "key35": "5aX5f8PGB2DAWK6ir7xCXoL8h4NKV8uSGQKQc3PtziGsLoCTxGE1D3V1fDQbnW7U3YdmevJte67fcV5tNr9x5zBS",
  "key36": "sVtK1wMGXP2Peb8shpi9dAsQmCz1LyEDrUXNUgcnKzw1Bu2va6CxwdR3Hp95wQ37sr1VG9SvQNUmeFAiZPpKTTS",
  "key37": "3j1ZUCPvx91sKSDjyAEdA3rLHeqYcKDTstBGiWSN6pnVFynv5s6P1axP5W7mZU8CWkiQbM48XVPNNrBLqAXwtL7g",
  "key38": "3DqEYTM5J7B2w75xbzAjhpTm2tXbFNVJcbNGccL8v9BgoVcPuNHamYEEUgs61bzGfkrBwHpZVNjPmZfdQyddzTfi",
  "key39": "4qR9VLRJxBFMrgsBwfcSdK7u2ZzWZ4sgZrdGd2jGSk2QiGTM2deR6b6vNch7xmA6KMmpNJsr8mLYGVo7J2HQ5kjs",
  "key40": "2CSHrUb1fviUXMFt3zkDCPpgjymRTRAucsNVRnbVzQN6BAsDrc4idY1ERRjcZLmSHqpV4yCtRtUL7Fj6DYFgT6ii",
  "key41": "4ayx2HmddCQLK8WNUkUM8krZD1cgxovNxrkbUuaNikbqE3QDMpPDh4tUGqHhRzPyR9uvVjwrwYm8tgZ2126GRtRD",
  "key42": "59Bsd7EHuc1D3cArrC6PyhD6vTtmHc5v6SHLky5Q22skKmMbz9DtBKMDKx2FFsLFrxrqqWKTc6N6eMYaesAzrj4Z",
  "key43": "2jykRXG9FVPXuHdXmhwFSYxsw41hCPYWxSpuii1SQ8y7f5prpw6EDthme5XMV8H7MLERWpiBPQy46TsEipzP3dez",
  "key44": "34VSYqRRLqCrb1XYVDaNBgANUrPJk4CajhungCyXQwmStvR5Z5bRG42LJFFZCh7TKFHAfX6qiQTpxMRLHxJD1sKT",
  "key45": "3ybcm7JK5VrF9SaroxURW9BzYidapjQgM8QEjdcYGp2LQbf2djDWA5nCSWF7MZuWjknK8tWFFm4N98GNe7MeY3fc",
  "key46": "2vGKWa1kvCEQchUzynzoKpYJSmmHrVjHLthTViQB45X3wikwfMxecEniA4gZHx5sVZ4yQwVtX9nkgv5VTYvPAXbq",
  "key47": "3xMMtns1UJDrGfeJFGacB9aEqBpFghDp3Rmbc3guFpy5NmkCn1pnoAuCQ1WWcCvi6ithYJz7E83LLswxcUw2gj1k",
  "key48": "YgMBXMW8hFTMtpgoT9hti9MuN2Nu78bDRKwenY21d7EijA8zgz1vhJUoTPwDNA5ZcY7kVBq86kusbkso2uV8SSu",
  "key49": "GQPdJPTW3qFhc6xFVNNgMR6Mha9wCb4rHZMc6tRFyZzceCP1kzGBet6nCFQ6iMbnCTGjGbKP5bNrvLWmh9DYHY4"
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
