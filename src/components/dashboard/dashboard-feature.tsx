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
    "4AULVpzRw2mdg4jvcBayrinf7nsSeWtGUoegXC6ck7FUqnB68zZmbudAsdSNKYKR4PHCNcp1agV6QQy8KVqRVAeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31tjkhDJaHAnomsqBxqcVj4rCazxvJqhStfb2RKzXSWWs7Np2PHr2SMgeghaPMr4SmAzb2b4LMawsivE1ANx96fs",
  "key1": "mntHyodYABGTfrhcNsnMAKtxw7DKHuomgArb8vkuiv6L3EEta7ZMmyHQSccqVdEMMg5mZ1oaPyCX9UKJ3sUji7Z",
  "key2": "3ZR1hmbLucP6XkH4DffLus6rTNsFsf69RWJpGd2Z8AThADhwwEsAwbuSMxWoVd21zHF1ua3sasRdF2pCAGF5EZYw",
  "key3": "4NTTmvMcJDoyuYjRdPTmksqpmStvPhR3RsJDn1Ffu57UPXXUXaQrPdGNx5TfNt1uioAA6ezSrGwfGi3fCgJswNEG",
  "key4": "2QFzwVq5MFtFStBjsj4sgBwd1YRnrra91cTLRhhBmW5nSTkdaVga7B4c5S3nPvqfesVNnWB2qWrzaNRHvX9gKMBS",
  "key5": "5j7yFctDeYQp9ZjmXfgomqf55NzeMP7rpKaitackUachxUa9fUWMiWqKCvKe1M1PfKykeEnTduaBKeiZCtt7idJa",
  "key6": "4BAvktrZGR4EQCiNScBEYEZZWQbN9uAmVY1xbcSAbh58EAXS65MZ3qfmWTFszJVKtKuJWahJ3PRCiQdiMxXdq2Sp",
  "key7": "2sNmvXb4GJkpS38xAB5tXDLKTXC1o5wjrLd69eVZZCMKuN8PzAgJXsDtjybQ5cL4Hd6CCx9iyPsPAivu1jZo71KK",
  "key8": "5sRTW7SCvvLJMi96yWPm736yRvXZYCmF1JAqUENheY1Km3FKhtEvrPyJx8HM1aYeykiP84FMpyWk3gXZ8Nr4DPd8",
  "key9": "5Sui5kouKkusJhW4J3MNSH8BJYkRVx2gQfRF2Fjx6JQAEzNGGh6sRpRPdA4oryWuhtMpZTTCXgsgJe5MFBXQShed",
  "key10": "29mzUfd9QvJmiE8PxLPpGvtWHsW1vT66c7iqGW5CEe4Pj4affqvc1J2LDYW1PLN7cuo2grLMPKEMqwVsNvqs3Xf2",
  "key11": "2Gz5ockaVRZstxR1T85gWJ4KRcWTGvHR4YtkprnRVtbhu4oa6DWcd5y9hAdiXtL5DeUdD29pux95wZk4CiZRAMKb",
  "key12": "3YJBHomS4yc5t26AoLNLeK5hX9Jhdf5ebJpEDW8dVna81igCu2kMjkQDStxsbjZKdJoJbSMXsojjQ8scNu3tFtqX",
  "key13": "429Ni4bjYowKXaZGBvJqcFriSR5WmsF8TXqBWedzH6VySoPiLPGois4sQEj1WLKou5fw9U9LtRfeGGLriMkuobyH",
  "key14": "4TKYtXkfpRGLNMwRH2wHQ8s5mMrTfj9ZmoN4UuMhytN1jCfbtNk3TzG7Hwot7JaeSd49t7uV9zD6AAP6EZHrKp3j",
  "key15": "613MQfbmy4wRSP3eVyGFeMBpZK4RAdktZsEwJr7snRmeURLXbj1juBMYYa4BoYt4foE2TrGwJetrgaKMQyEWe72J",
  "key16": "59HtG63nLi6cEq8QSx1Gudkh4bsGxKJco5bSGwyScebmwVgQLBiE5jtGcN386PNxrrBUdAXkTr66XhQW1KeX3a6i",
  "key17": "4GK7bVJSndLfWpo4HAZGgWYmicxNq9MLjWN7PiBMwWJk7Q7jBTdywesN6wMn2sEuNPBhqNXWuCtu8Yu59ZiyqSs3",
  "key18": "5oRJ2Hisy2eNVnKGVag87MAzoLApN3DrP1QVnkcjVW4xvUcKFGkG6LoV7pLYWt9WjKN9g6cUMaoajSXggjUnjk8r",
  "key19": "4tHDJFt8YZHqm2uUFPvzyFgN395C8TuA6dFtnxZjLy4NmW7aSHrpZ7Jk81AoRmLKFM9DtsHHacVgxj4teFAzQHRM",
  "key20": "2ZXpRR6JnDdebtL3DJPtcdbQJuVm35QC9prEFb7ucuoQ7sEc11THrSoJxS69sfnZffVdReqDjiKomE1fH4oGb35i",
  "key21": "5i3UYiYC9QS75fGuoRcJqDpQKKixPTH6hSjfH9s7ANf9dgiV4P4dJDosLBenhDyPWSG5pdUYnpbcPLAsQqPCGWh3",
  "key22": "3NMsxtH6pXUcthHBfKEZV8TuHtnm5jWQtM6DUPNr12dBmFcGF72Gv4inwS2AXN2U1cszj8wcCsn6P9EgPPucQxs",
  "key23": "5Dm9psFcdVkEJZ1pBET4DysP3cwm2vUujueHJvvmD8iZWZ4ocigVrnToQS58J3F2tDojfZhUihDp6pcGhHak8hwY",
  "key24": "2bJteWTDgKSFDvASwR28qQdf1HopMjm2yFiWk2QjKFpSavC6AdssTD4Wa5ZKQByp9Y9JjQThXWDJxYnwTUkMxNk",
  "key25": "4XnkrNSeH78GbfuaDFXquntu7dX6tb8RH1bcdibo9eZCyoa3RzYikvwURd6ZwgrTcZQiSteZJqGcEvz1GL1iSnEH",
  "key26": "NzwzN67XfsUSYHHWaVtPcYkN1airCeRqcpK4WZAC67emNVoKfsDes4Azub5DsDrLuUZoA5SdDeaJZe8EuM9f8xU",
  "key27": "q2nCTXCJkjPmtCGayH26EsU11JUAn47riwX784Vnt2MdwQBzgrfD7wsiny9D8zshK1CcVH8GYpaJrZax8zDJkjN",
  "key28": "5zXRSNm2pu8WecBVjUjGGgXz4unNAg1RdYhphnFAsGhqXz4j2XyQKd8yNXLHhpvrJaC5Gkaj8eTgMmNNiLZMYPhs",
  "key29": "3CiuFxgfAYAXLSbSmV987U8cTZKGysrCRvxYAydpdz1zFXfu3zwtVbdunVaU8apYp3vDbaVhwQPiRjEKN9iAigfA",
  "key30": "33LwK7NxCZwwhkzXEb8koEQn5oZUZMDXLdXLVe3kzznp5fgHAWQm1Y5uU6v6vMJeZZXdKq2z57JWZHMS54qF4cAJ",
  "key31": "LNSqusMMTupRZpBKMrDZ1Gjot2Vuyo1tZndi2KPfqDopYvf3GXWHBdBHuqLNfz1KvjiKD86EdsBARDkszq4XmTy",
  "key32": "3xU8Lr2VhvsPFkR4MSD5HsEr4Nm3Uo4fynKt9KmMKeFPUCWaDnaZn5ieHnBBKxutMPtMNfN3duZFVmNgZHjsN79X",
  "key33": "YHmz8pcXjcUjbjq1tN8wbUFSv1tym5TVEW38AuaiLYQJXWyCqvCaTe6Ccft145LThSNc5ErUgtXpToxeMnZeNKc",
  "key34": "rBopV7WmDznJtG9TxZfrJnHAjaaBiPgxu1YPxmAYiqaJXyZdmewks8ksD5WEu8xUktsxFFS3M1zFEmb5s4qtfef",
  "key35": "5o7xAiEHTtFL2445pzGRbKj1UmLRZyXGAYeJjviPLfYYGz2b65Sek91y5hfRQ8hGToydW2qzWEBwpEYvi5VNJEWE",
  "key36": "pqeTgtdi4pafz9ed4xc5UJm8x298LaaUZkoZ7eDMnpKNXBoei6P28yeZkq3SaxbZdG2LfnmFkoChq835quCFpgu",
  "key37": "5m15Poei8tVo2GgTimjK2PToxgZXFhVwpm5Wvfpf2kEC4tjdAXPAfKCrThvUmANb4N4etk7mi7MEanY1XNQSzBX7",
  "key38": "4u8C6f8AemXeGezJhueY8QBthFpsnMPK4MvrW2QDEmDHCuCNV4rEhAw8eh8qdaFspRzNAqQdPFLkpxarSsyB3MjM",
  "key39": "2jXRTcnmz9a2rpjbfiWvdkHpAAXBkHZmok79Ry8rmD4hewcy1Zaf25smjTbV6dPggAkfxNvYC87zwJxmyDXmnuM9",
  "key40": "2z1pbkgULFGb4VmJ1o61Rv5mvcMbpsWsHUgaL3HcaqpQFkfk1TWLNiEbvnmgSoNgvL3TWECnVnnhRgoahpgiE7GA",
  "key41": "hRuuFSWkU7u37bukzE7PdayeD23awU8CZ6h3JfjZTs9UBsy6CnHDtjyEM47qvipMeF6DBHSLBJxAybBLFLgk5Lv",
  "key42": "siYiiA4c8wxEu2xPBTyC64ecHavkDaMyaMA7djUiGNq5yZineuaywdTLg8Ni4snsHBG56nhP42153LnAFeaui81"
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
