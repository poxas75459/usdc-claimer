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
    "KutBbkGGywnYLms1xvLTQB2mARHwtqXpjcWT45LV9e2MCVHDysb5wvhDBtuVXPQVNEaBRxbdJ3dQrmZrFGuTNjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w2opZZRZS27uZcmWCdaWueUaC9vgNfywm9UnUeb3AoXmWjPj4fpFuCupPZwtsGiB5BSvrKnXKuZivfvtktvXugJ",
  "key1": "2uJcGPUfKwgsnCnge9GvLfH58gvVeP51X7rrSYbQcJ7fgGi7btnXr2B8pHoEL9EcZ69SQHwjCTrL1P91NLEsmGXD",
  "key2": "2Jso3A1nTyTS49R1ZBYmDQTo1xcyZDP1Qn4RKK6Ttzkt72y3FApmnf2BoJQ3tu1sjCyAwUCkHBzEFV6uPuGUUuC9",
  "key3": "4JM94hv4hpP1Zj99Q6qopNXD33syKvu49q6B3muRjsFnFVTvXWzbudhAkvm2ZvfRSJAMosTWpoLc18qrXAXRcDEj",
  "key4": "5TpX3jKXQGeagoCU4p3LCCCpZbcJkqofDFTNsdtKKuFXmnT8qViUVYFwpLYWsiHJoVrVtJQuVafePbMhjkk54rKN",
  "key5": "YSzv67K7hXLiahcK9wi8TnRw5xJm12rkjJUD6C1Ty8Z2JiQ2H1FewRHfgU9e6kFEvrzYS33z4x7yEgkShLk2XAw",
  "key6": "35RiRW6vSrU21zup7Jy8z6DG6VbBmjsFvZ1moj6xvG76QVDpFJx35v6ouayfPtWztdBupGiBakNEorWwkpcCRPCb",
  "key7": "61wLXesU1SQ9sWoFT2DKk9VpgRibcN3GmH7SegVmei15yXv7dPzZzGiDFfSbG3nanNiMCADvUT4LZTnXEVJEXted",
  "key8": "5ugGL1WauFnc2f78cfFTGoeBeJXYhS66TnrfUbxzFyVZnTHph5zrRxKPvdeQm1RY4RgWSxKyMaUnwcSCRcE8Ekq8",
  "key9": "4hUerv81CJwW5AbemKQNdAN3EWqp8fKSvF38uL8tUnGarQybs1q4z6TJoKPwHgknuX5jAX6uxQWi9zChc5yYhDTg",
  "key10": "4jmraTDZNa9AbhvpMsTMYoCSgFpMYh2zn1wkD23Ltg25MxhcuY4cfYXWf7FptRvDjXgfPLCeRq692coDRW7o24m7",
  "key11": "5EpbU2cB33id7hsMU2ZJXNtgayieh78qFCRYSJ8oLYB6h1DmxnHBos7C9Cx9Eob8DCHPKCS5MMFttDEFRnurwxP4",
  "key12": "3vRf2t5tdpX8pAA2D8xfnLc7m4ZCqFdCiPJMXkhThfM7b4AXiCLZsoZhu46Vh9T1RQHNc4B6wG4bGXTXLJa3RX42",
  "key13": "5frWAiJf4n8QE8cBGRW665c2wG8TQjt2D6P86HrPAWMCcH12sRaPh4cBACZg7wsk6dq6GTQ2VEy3FY1CG3t1HqeF",
  "key14": "2S434acgbttWV1HRrEEiyf7r4BYoBDqEpxUSf8MvA7QHVB9q8peGKCefNDF4kREngsJ6b4BU6NNyP1enMACzu3Pf",
  "key15": "4gHUWsCKjV5tZLhVeZfJCbfYjoZNG3zo1SQuFzYd2WTbnT7SesssZGYH3KBBDqtqEL1NmZxt4NA9AhjhZdqk5woo",
  "key16": "5sJB6ssSE4cGKoUWFPYCgFr11GF3ESUJV7mfgot9nza1KB8ZbszUGSRxh98ge7RkkZXri8CDtMsRcFYiwUDn4Ks8",
  "key17": "4jXN1ZmbqXA1o9F8sV157PWdPAsdWvCPmPFd2xyou2VMC1ejWmcVwjG3GJR2NJYWkyMgG4quQu8ppUV41p2d5FT1",
  "key18": "Mm4z6UjiuWEsEtdX9KnF8mdNqY4Gh2y79oJLyLdYuMfzAs5xmupjAcAnnS23GEy8qCQJikELPG3sbN7f4tr7ftR",
  "key19": "49mj33AmR9rmKMLqndYMnYmcseRyPTf4XHDVn8beNu7Fx3ARqxUsEX16G1W1cXHPGuCjas43fm7VNchPmbKEsRRm",
  "key20": "5veviaLv2jz91cYrNF9qfYvLA3W5wo723sxYuo2khiHXgjoNCkVrKmtzqDMsU46SUQM6PrFg7C1uzsaCveSTZCEs",
  "key21": "2iqprvowSmNc1R61egYiVAWEFKEdvKrp8RytK5hW6wEokMEnqABKeKz7h4HMcBBinXotfrmaX3k1h9Vm7DEDiR6U",
  "key22": "5xasPpnaWVpTE5R4EVRVBNDC6Rji5koQXAuGvsr451sJyD1zg99EL7ukkY9vMnuuvJgJVhC9AkbVt3aR2qpt6nbw",
  "key23": "4M5zMCkdEzsRbyMbCqzQKpUdCyvcDaRCg2GU9QS7bRAGVekCvZ4iPvQKUL4SseYsHAMJkA4ZGiYSD7LPZBGSorYt",
  "key24": "51aVrNyoGVbiwa17BDPhGRDxVTdyWjHdihUDpf5gKL9Av8YwcQaEzQwqUtuiaMZfKafehpV9Gghm16SYC72tuVxW",
  "key25": "6678STS3BUrMfRc9dGSEBan4nccyBxrb7fmwMi3TgR4tDytsyA1dxC97bBqt3JDZLQ4bebHnYUHQuLSRjQMHFnJM",
  "key26": "2UnTg361vUEcdMvMTXuLX1BJdZBEho9zJDNnDreVd4mAkeSEW585agqrgW8X42N2NsMPdJZgZBNwd6chLUyLSQCC",
  "key27": "AVSbRPPbyN8axxbpRqwLLqcmbY3ATwknvXUr4eoFGM8wPJ4A8R54GUcJq3tVgMCNquHddJHgcgi8T4JPBBbMwzR",
  "key28": "315gQCHaaJnXAnZTNcjoZRE8NNUDf9Qiui6sw4VNWnQMFpusmWuRPEkHXosDnqNSh1yHX2ufZQmP8RdYVGf4Xmdo",
  "key29": "3RfZbva87CMQVieFEGJumzwbhdUd5eYp1RV7GbKBZQJYTJwXWPcfKaRqwi7Wrp2mtPok3XNkoZa89AqXjPaR6823",
  "key30": "5UgBdte5dgLyVt8rM6Qw7E4J7THuV85QR5hqD9s5Mp3BZn6Q8LJkqPP2vZixB8fwrjeLdRPNr3tx9jZR84bDaZLT",
  "key31": "UzjNZTmjtep7VRTqqPAumeAqvXzpwpLQE1Y2J9MkNBttAK4qns4JoAsdZp7qP6mu9jKZRcGp2hCBMmZHcxaTCCo",
  "key32": "5BuKDTdHRigS81A6KqEP2oJMAL1t4Wu8uYdfXagec86x5j7cuUhrPKb7uQ1nXZwkDpVsCpUpQYZZizwWSJHApVgC",
  "key33": "265AsHTBiA1mSYDWjf7kGMdB67wgT4NTtyNEZMDDcJb35AoVQW1tv9HYhVCKY1AewWWCG4RhFoLsk6wNDJTSjHUD",
  "key34": "2viv2jaKn9KQxGqv21m1NmFhmrwjMyEdNrqdWKqXXqh5sqt93qBmDMHZZLc96VKUxgVgWUJaJzaqzws9uH996Et6",
  "key35": "61qt6GvCejV2xrwwkZQZersWz8JC3eEU5bMY5dF3t2hZcgAExLfhXmfFUNjKoAAyGLfazu1JbWyjFc18NmZeAibw",
  "key36": "EWZVqzEaR818VmeNfwz7fgK2rpHM3SQi7aWRJgkKE348tddviAgDttaX88KTxzsf72Hk52PiieETykCYxD2vDsv",
  "key37": "2fCAxvhnuBpn1oGLdQLNvFzbjd1sZPfTgYkXT9FToZuhz65BpbZuBj874DznKwdfikDMrbcS29a3ER7ZPGucg127",
  "key38": "Ac5RyDz9rYmfuxtukkHGhauC9Y387E2qmvx21kw3kxVZrUuD6Uj8hbG8oZoMi9Vp8ZjGZLgpyhkMu9oqnqfA8Db",
  "key39": "mv7V3gQc1jVincQFaoc9MiDvYs9e9AKwEtAVFpF8i74FwWbP1pTxfwtRLM2tY9BrSAcE4dBkz18rZe8RtKw12DA",
  "key40": "5qHBuwFZ6MJAXn3ruBWMWa7UvXwA7QqRuqAzBhwFrZ2ARDJJwTJ4a7F6jTWuwVfo44eHaY5tY81bFPW4Z7wZ8zoc",
  "key41": "iZK13AJuPkFiXy5bU7S6No3avPbfZKbC18hEzVc3fpwnCpvvCcyF7gJUUe8qczXFFaPJsXmbCPwEHHC8tDEtjhz",
  "key42": "5fATrt6VuhpNS9GgMNa5TL5fMriiwU7Cz7VJHbWVNqnMfyFjwRMZsC21arZfWjGnRbWfX52bGLfU8K9957yTAGcX",
  "key43": "3uazi49n1XctE3GrtP1kEF1QZjWC3aeiAMeRoh9TGntq9RvqHXjoa7yj57J8LecU8jyXkW1NqmeQkw4bzX5czqZA",
  "key44": "4nrgrs3NfFbxBce838vZX2NMQYS1HM6JSuanvUazYd5dMoCbgPN291FvAwP3Nb1oAKsSLJPo63G2AF1gbsEghcwc",
  "key45": "676JNrq8UVu6Bqb8agPwfdr6PVstNkhrL8HUrnQzmmsHVrVpuCrbD81wESTc2N9nrwiP7R38y7NTveHjUpkga51w",
  "key46": "dKiQoD2eoVi2TTKj67GNTPS4SWAvrugWqK4uCZmEe2t9EFu8amCrqz7FQfZFyy3LCCjpdrXwSX78uJRjFGe7VQb"
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
