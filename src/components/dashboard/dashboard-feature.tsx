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
    "2YUeZzAijHX9vpvHoKCZJ5LXUE5iCh3qefptDEXxFkeAzaS4vfdXMJWScuBVzJCuNV1Di89hBUjxbdLbf7t97svk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F9cRxrneusQ9yrtcNazzXNybAki6R53xh914HiWyUS7mv7UU9Cg36862ss9SYS3LAkvM4CKYPJBXiu4YDFLefM6",
  "key1": "5kCnHaBwPMhrcMUzL8V4Q22gvWEq5fqgW8K1cAkeEYsDNRxsXp63FoJKvHYtk6WdYhQHyMWQPB2yjDxDXdZGmzu9",
  "key2": "27CX65nwKRGqvuQk78X24AiTJEAjfv9PT5kknjUEZfnkrpsisJqbqpb85ALnP5gEBkcBEuMpreaKW69CmrecP5Us",
  "key3": "3MqW6hTJ2jay6Vw9VhfjZ2rCsZ5Uo2dBktruLy7Fumgd2xnth7psGKMAriRxo9fDS1P2fYw9GbRy9uA5ZGUP1DhP",
  "key4": "22RVkoUTVUdHELHag8byzBLuJh761iLcJsJWC1EUgsVUjrnoekEZnce914txoHcf8QGHi8RvCNZtduPoiUPf76Pi",
  "key5": "4vSYYCoGWaYRJYB3ZJx123fjrRHYb8mBpxi1wvLwBTqhBqjGLjGYouFo3GoRXjPT5Te7mZRMXr5DgPiJJZri4sHU",
  "key6": "4dfRCUyTmi5Gf7Mca24EyLMZEwR5hqD2WtG3TDFvLLSh4UiSpFa2B7soiAkHK82SYjDeXqcY1id16QaPsvSshk5z",
  "key7": "2ntz7rm6J74LVwYtsu8AnwAvm6DqaHRYksKS4NhqRHGZeAbVALQRVJC3YRpmSjdmp7LKoEs9VjR5ZL8DtjGsiLnr",
  "key8": "5meRF16AnhSmUTPi2cmpDJy4EUt8bSzKvrZufaW4iphNKapjPU1v381VwsL9tjLqKxaq3tAvku9Q1bMLuycdWo4x",
  "key9": "3p3Bd6EiPZ6w4RpWqWa9uApHusTy34E9PyEseNbYWjVZd6RsHJ4Vsoh9XVMTN6QHCfWwmYb7oEF3C9JFAMZ88Zt6",
  "key10": "4hn4FuAa3ytoYtS4AK26DzuMZ1kgBx51AqhN2Huskuovj22C7y76ASWeGRsvYFQ9nY5f7Zw6wXcR7irmGEjyMstE",
  "key11": "5B78ASnyX9fTddNQcdZz3rxiDz9X2urCebq4zLvt5C5wrm7EQgnhvmPQxVTdXEEAxtmXWaF32zrucZ8ErHBguaYi",
  "key12": "5Q7QyhBs8eZUG2zXiZ6AxMuTBWsguyL8qCXdVj9if8MJvRKpm1VDBgHPNpgSiuDG9t1cvtK3uc7Fkp1a6tHPnenr",
  "key13": "5t6w2RuZPEGCE7yyZ9oj21aDr79EW98UsEuAj3W9Mu8nRrdLoSYiem5oe9zuQqV5wn5ebij9R2AxdGVzSGHtA5eh",
  "key14": "4R776eZ8Z1B9EFG46P7UBqwofPicBrPzrswLeP5XajbvtJxbYmRsihghrvbDtowPEHxNXmZPuEYm7gPuPEmp3hk1",
  "key15": "5HzPaQviJTPM48CAShPcNYiidXCii118BEsZRiqULspcmzotAxkPzk2go2ewLcKibNMidM71PjDSGE9wxMMmL27v",
  "key16": "4BXgUG2KiWvxACgyW9hpQfL9TizbhEEHUvXBUz8ep7NnmVyFabsaYNjc2k9689vGu7RM2Ceh4JHZJc13vckN3mGy",
  "key17": "6ZnEthW4uGvmsL3NHrbVKkyHRXtJLs1RMLrbbFBP2Cg3Q9pgNymRti6KBMUgWcvAG7cG9M35bWgtcaKMEcV5Das",
  "key18": "3YeyaQUULjpA8cz4WJrEm3mUU4i53LZB6FhrZN5aR68KmgGCXgimfVKryNiidcsNqNKDG3GCww1Td2CmxJrXHTCo",
  "key19": "XXgNWLqWczoc4QVUWsUMV4mht7T2eJH1MBgfpnRLzSiYLXHZazAnET3e95jVxV3kXSrqH4qg342txz6ua8js1k9",
  "key20": "56eXzz7fYHJeM3Tg7kfzCHKa6hDo6kc5hCDP1KhTpfynHP8G4joAVUoZNizzWAViLEJPuCk53zKcNizuDxcdD9xU",
  "key21": "5uZY5yGqKexqako8PXJmFDXnT3erJunD4hkXio2ew7sjZLDL9FM8QkW4RyhmZ9zxK2pkFrmsaQvEmenbDD6GhN15",
  "key22": "5VrFNgTxSPdshx64Hb77dwnLiP5pWfPyLjcwhsSzNda7GJCZaznhTSACdN8GMsJRRFCe4or7Gk6gw6JzrJa6ghba",
  "key23": "31JQGYnfnUcKYLDRpS3LbPkJWHEA1cm5s3jnwKDCs1aJxtcoMuLAkEj7h7sUR5sjQSdWimayVhxe7UDsezQB7ZnR",
  "key24": "5sQDcYXRUztULHmUVxhVF4xpDZJUcfYfuS6fDVShDeudjnJ2EFbvHj2UD8bnvPjdArDF8mVPYspnKAkiwY3vXjvd",
  "key25": "5vYTaN4VNJUQEJaMHF3xixbeq5bx7ZNhFDrW1wGbyCWsB44s6mbApREHUa8wnMkNn2m7cKFfPW1H7fcTxSbzYAZr",
  "key26": "3GyC9nkeAVGiLpFk3E4z3dtWDy1rqJormJnyUfCtzMHwfiB8RJHocWAtbCdEaz3SYtgtChNTF56tKwYbd5ZriKZa",
  "key27": "37GCaHrWtSM9xxaJX3VDZKfpdvdyG4riX7p1QnPwgFRE8PZ5hwBqRSqPryQd4ygD8QDmPmpb8vq2ctmktjctufui",
  "key28": "5N1o3u8bu6uCpAf5nwtYJmEfiuJkQEb6Mkv8z1QCrqFj9M9yKygkSLX61jwC3t5U1MbrUpJQJry84a2t276YmAxe",
  "key29": "5nfirzT9rqS7L1YJj6c7wvKEeH7pLHvfxPDBzqhZ2mTBSPaQYdN5YiZ5Hs9D8bhNrNh2T87An9wr4xe5Kc9PirPs",
  "key30": "3AEWibZHpJdfJrCmGoVwb3Zqs8rxfq947aa1UWM69w4BHZfPHrrMcvxFqUevoUFMDtXrzZs2BRSPbeucQR8TVgqq",
  "key31": "5EoTEz2o3PsMcLgzjmbPUjT1jRAeDbrL2NkvPSttJethiQm3wCgFUEHRDA5NyCFu4DuCNdUdibHdSGmWcihsDReU",
  "key32": "zg68n4H9pgNEScPats6mhmLwjip3eBBkBTux9Lrm53nr1nBeNaPpKDy4ok1TzC5Kc5ew3zViDCb2MXoBEk2KHQp",
  "key33": "55Dkwt5xGZ8gDG3fqZ3v6Q1tC6tgxLrFZrKPMAM7MNYenBfDdxE9Naehk8HhEXxn85876eARNFAWUqMe26UZmjN3",
  "key34": "3AywmAdczdZ3om2huTqTgpGcRNU27SCbZKFnSC7wqkD1RDVh8UGAKZGpP51932gwicyGjeamejvXcHJUH42GcJNi",
  "key35": "4xjUohkAJZJE7nKPEmpGhL1uu9nMpZzgH2jEKfMGjq9o167Dee3TGZYh7ou2WUW5pGoVyTADSyK2P8vMQnHJiEf7",
  "key36": "2SR6AXv7RgjwAJBmCK1gNJ99uLcgLvnhYK69VFixWT4AJprTs9HVEyuSCuEi473EL58LVdMQXviHq7fEybDVhFSE",
  "key37": "fQXWq3f8HwmgNsp7196LFsnsfnqDDuz9mW7EbaisMCs3yiEeB86Hu3WY3ZinbVaPZkTp8FuTX5wuMArhD87j3va",
  "key38": "5FiG2dB6gTpbTCTyqmmeVKCavhSN4uUYDBTW8KKnzUyWjXXBhmG5qZz2sAf7h2gmykR8oCTtZcZbAHCpmafn3yAN",
  "key39": "2R2YEw5eCLX3tec2fh7HFjV8PnENEXhCUnG5TcHk9dT3dVo6kJ9YukEfrHV7rEJo4uwFDAiduwW2GgFii1kpzYtM",
  "key40": "2NGUt83Be8FiYoDxBxbmVAqm6nADus1jRNFrwfiTUF7wBevDX2P6jUFujbT9gfBkNbzRZDypjqHZFcz5wKBd3cfZ"
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
