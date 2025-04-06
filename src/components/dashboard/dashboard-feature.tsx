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
    "YFkTy5AsWthYMzfoAsUkq3HY7shHvDMpdFiB5TRHBYq19ChujwNXddPVFg59MHyLdyHYaoe1x66bGi1aoqXo2jm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CKmDQscCgZyuQY5qsA5rsZrpQJRUsegtg2rhyDQ81koRLPdWdxgdgTSJMCeTvnCG6NjhtKnK6TSKXKjp427wjCr",
  "key1": "3PHsfvqRZB2VU7R2w6UEfsXzebh1ZAxxpt6Jxn5ByCq2DfGdyYoD2FS2Z8scHVu1hPw8i3idu4xJ8tebSfs6kseN",
  "key2": "3NisEfzuFPFuiFfwzTq9VwqXbJQnMpuztUqPSBBEwD6Lzcap3n1ZyUPNdSeVNEjSbxGQshdXEVVMAekMSbdZMBaw",
  "key3": "3NcEWWoExa3JPP33wXKwLhHpaZTwfFzuMyXdZtANSuf2m5rEAGTJuVz3zvYU85J2YKtkRgavVQpyZe5bffQRGfCa",
  "key4": "jLet43AnVYoMTMuzjL2cehuWmZhFRVLkRqW4KKrfTDGiQeiByZAJE3j6H7G2zySBwY1J5vEKLQ2NAc5dutzALJW",
  "key5": "435QL2FhdPDLurqKKb6X9UpAmmsVXWMAYxAoqvzJ52Bg6A4rcpRAQ4UzASp9tzaBNogXFytQmYg7D18Jr6Q3z1Ev",
  "key6": "5odf13WxciYHFxNibtkCoQkMnCUw2HLry1qZ47Lv9NSo4cxpSmUqzw1jc37Xfuhq8XJXo16hQFQi7uRn42E5KedY",
  "key7": "21VRZJ7Qk9n4FWzFSts552dS3EY1Qu7gCmR1YNb1kdpKDCYvrfffepsQgReHdgtEeSP7RJiyqryM7hEq5L6Ygiz4",
  "key8": "2YzfrNj9azpWNcnVUJVT2fHfKW4AbJtY9yF1Xfa2rmbW9Ccp2N95hKp9GL2qxD5UDj3jv1divS68LN4ZcarmbayY",
  "key9": "4yepMzsYUMxiZgiLdpUeHeAVo2G9GwUKpQLiud1xNtd6TGi75aei2zkGJJ6MDs3qid42VZ9GA5HxjcXrwm8zzwot",
  "key10": "uqrSLiyK6szCLJgZhB3ZejyYajnMRrrwau5F1wgAnQLJUhe7dHbc2M7Yh6f7TEsLwSQHj3BCh6ws7c5ZRdA5XVt",
  "key11": "57KUi6AHFApSLdxfHzDxk7PAKfrKsi6NVhY664Woc8zKzQ4Sd4ibfJeiT1n5CnP1KLgmV6yUGFwaJ14oT1bp8K3w",
  "key12": "S3jcKXzwHih25JaCZ4dfBnCddQouQFZydsjJ9YVyFyYijavHJH7uivFsNV1f9dZFySJmttJRiLbbttrmugbfpak",
  "key13": "19LTDYsstKySpVuGHDGoRWJujERaKxjYUXNpLCyxFzHTsqPQ4ogCja4FtDtus3ujBvf59AdZvBriJ4N3c6J231F",
  "key14": "25o17hnZbXwWanjX3xJJSZcgJg7vMGJA5kaGoVQyzKALFn2W9vkDdzoBHaQYDd6pzfsTrsZCcpt1K8DX9BqHgYTh",
  "key15": "3D4MdUXT5WhvUhKLGVqbBM4qJBJ1BD3py9LV83PS4uLURbBdqMbTXqfgexA2RPWhug1pqP6k97ApTGmjW6wugDyo",
  "key16": "24RX6VigCuJS9tsrAy5z25HecAqruGFHY2zBACyVbhwKQVjY7Rv6NNmGkrdEq2PLrVqfgNEpXs4oCEEcnQKiXmJv",
  "key17": "2JXTnEtZreKdrKKDjCtyKCrNnXQcTPiyQgcvkMKA1u54r2jxHmLjbr3STNVyHLJrnmMbLKqjXJYTCpPRoVqnvRTD",
  "key18": "2nuEfB5oDXiZcXcaDsZ7J5DXcS6JiVjgYUpgddeWeyYJjfYsNPn1x5GhFwmrKzXV7bVKrwnzT9g1pi7MmAKBHVgy",
  "key19": "2ekuUTh7Rvrqnjjzu8rqEmirMdtmB7K8o524LZXhmapLesTTWsfvFyccxWyTNLesnJmZ2PdgLZ8RnRdLsLF7XVYB",
  "key20": "2DUtskbXT6LojaTHJCY2ghrLuqPaMwk2w6CCEQWBoBHtiEd5m51BKrnh9rsuZHkNHUg3mGcLSuc2CUJjMRZXucMH",
  "key21": "Ls93ptBqRRHVyjYb28mLCncx35BafeQv4F6DN16HE2qeMmQcE4XSMB7UpoBoRpXYy9TuRmB892KahzFnkNcmhCb",
  "key22": "5W71iRtdNAHiV9dL2rZAmXSXHyF9CTwX7CeZsby5bLn6sAxvYucB9PiofuJjGsknoG65sYNQNyipxbCeP13wmqng",
  "key23": "3SD7sVoAjGJaHfcQ71yz9XGHyRQbBx8JpRoxbvCyJmgXv44nhsmYV24r1ZFfC2CXeRTK694Q9APny9oJzGJCHcXS",
  "key24": "rHQFupduPxH1b6zYfrZ5ShRjUHLQDrfWuXeodCHhYTBN78FsW61yf51Pyf8vQ1pGyHfF16pxR9jSMfnxYbSDAD1",
  "key25": "4bkRH4ragvC8TKFhGanWKiBEdnEqfnxLYUHYmZ2xSvFjTRwTPq3XLFkjhXcANMtPWLNkN6Jj5EzRvjzUjZYuVj7a",
  "key26": "3jatQEicsp2ABmHwfsrzZkQEkLwtp3oa7Jen3cAdEE6BzuSphTURR3eviTY9ASCbr8ovoacyHrbDACF6RPrGjZ7V",
  "key27": "3rNc39KZtxQQyT2o5Ro5SV1c54PcfQZSFqNWnqew1YNGkEqARhxxyFAvRkiCR779ws8Yo7F7W4Y7zvz5BtchDaCt",
  "key28": "2bE4y3xmJjCcF4LcDk5aqUbE1eW7tMEofg4sNePy3xbpGv8nYE128acPtGLKJeTN5cQP9a5bHnPDGsLcZsaEGujF",
  "key29": "hp25uX942zEQuXpgGH6rUoSeD53G3s7i8fVaXV4qAD4LyausRAa4FfYgATLTrrEXS9uVSciHohHrnzbucpijCfd",
  "key30": "3oD2CsttBJKsirgXpcJKfUbnAb5jeUA6uReMmFbCiMSNUFNvoPByF9BJkKttq4dEyu9tGMHpLc5nn3eZtq1KzpBa",
  "key31": "5KABv9RVL2jm6LFRTXzWcEULHmk6c2WiJZYzonwRw8gmrMJUxj2v19VVar1JFr4TpxN3uLyXpkdXmJvqduHi4AwY",
  "key32": "VxqMHgwPJB1NsDBLjzV6chmdV3yBHyWniGmjRqXT9Q84UqWppwu7t6FNtSYpCR2WMuB4UzkSb5sSUW2FmoEvm86",
  "key33": "51TzKqSZYE18fTbousLhFU6wfCEXdQ6w7cGNuBwf5RHUnr4tPcBnnZuwFnrbcnP2MxLCiSN51fSFnui5NumKGdPf",
  "key34": "28V9yeLYh5Mv4YtywfLK6CLn3v6tEaBEiCHPyZqqJte48JinChsYijq4eRxaT55pMhGZNYFfMTyYF14hsoAmghY2",
  "key35": "3XRTRBRsHmxqZGhcgxKsUHWuYvgdd6iEJw7GakkzmdPHoJ7AfgJqfKPTC1oE9fvTtZohNr8zr9xaARJfQVMDAKsL",
  "key36": "2iEyZ79DAzSTgYRsawCppRibvCM3q9yVAoSSocGqBb5iaCUywxdCVVNmKDrbQguKrCae7eUA3BqRJneUx3peJEwd",
  "key37": "63xqPkP3V9tCgNMF26gm9SxSCNz4kNpPNmsiMmXSVGHFnN4YCfKWfSKDtNeHFcg4XZasjptsPx7DZDVNEsA9fPE5",
  "key38": "3Ea6cfmas34JKjN9tPRAYqTVXpznh2CedVjKFyJEjhyww7Z9SGgEM75vY4GjBz1ZyQkbwpApi5SXxtsWTQD2ABqW",
  "key39": "H1Ejs9cYm3ZU5eRFnr5BB7H1wfP3F4z5ADba9oEJhFxpMed86EebNEwWWhDtBzHm5tTBAo7iq1nAh4YsacAAwsu",
  "key40": "2UE9p13Z6j1hsHx3Gj8Kr1qLq7vFiMAR7X8dc9jYwMtyf4UFN436Lkks81FjTLgsMvFsWraMpzrRXqNkRafXbgVn",
  "key41": "4P4sj5ULCEJQxeUe2tKN1RCdXBR11Tm7gKNHy6gtHcj3XHzj2gD1aj43n7A9yaMeM6rWmhddWwEaqcgpibE13SU9",
  "key42": "4qdngeb5XCEFYg84oyGj89MCHTAhbbsc1g1jb1YiwTxEAw2hQzwhBBnBQitj9UkimZ4ErzrCfrw4bLMoU9LgWjQr"
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
