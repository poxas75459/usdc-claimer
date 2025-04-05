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
    "4AZmPWD323gCxskdRhTCdjWjr8Dure2WZRqWVQC8jPsYpgVc2XQ1PnrWzPrPZmeizztaaTr8qqPUu7CJVJh5LUt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o38HY7RAYVtJ5gpTNsxDfKeHd7gyL5vh8gq3Tzreu3UPkyhUsXPZvySx6bxk1hmcF8w5BzzCqZoiH47zH49GjBV",
  "key1": "2z75YEATFzcMU82ntbdzbxwUxneRTY2QkRJ8yoRbZtYvGqFxQZWvAcnBJX3z7mGpcxpxRyqHfmqesdtqydPSRkBC",
  "key2": "3RCABGudvz7NRKbiZKWKeCHRAr5pvT4RoJpgFw7UUoQ6Ako4bb7kzkrLiHXKpuR8HRf7E9M4ofqw8LzBwKvwBL7N",
  "key3": "5aSHpBjRy4DqtN15Ru1QkLb51SHGSuLLDUWX5ZA9B6sZrVhMjaWNLh8ZkyF1K9T5yFeALoRdj8ZqntzvUxKZVHeJ",
  "key4": "5ZQh3yecHPpVGF7qBdXMHUjcK8wLGCn7KE9MQSSMv8TxmqjEnEVPA5TAeMGx1yc6dpZTaTH9e5Aj2ntU2ShyEuDL",
  "key5": "5JLrZqJZoa6fG8sqJiDLDV8RHkU2dXjAPXhUGrzXjkmcZSAPPUhvaGb221nn8DZGhcNmuwzEoHWjZEaDx93bbf7f",
  "key6": "4MtpFrpwwZLNttnZzUtDBFykR8dMjJsMA6pr4HAWyFzYvaTgkBS11ZDHxodDytMTmnv1sxYRe1C36qX2x9NnmJBj",
  "key7": "kvJPtb9UYXdjjdnNcTYGmRmdZsZXjz72mfY3jxpwPTFKdHyXzzEHioEdKoh4MoBFvHCPFBMAapcVtbPa3ZnyvzF",
  "key8": "5u1m77qpmZ9abyTKFNYtw1M8aAtFSetFRWzrgZr9LxkkuLszLSjF9j3HNqzuxj79vizwK8Zj3RJczDUghWHSztgH",
  "key9": "4MyAVtkLkBp3EGUu7UNs7ZRcpGanNhsodsNRSjWkYeXuXjECNpj4ajKC5gCtSUntGmTxGxy1teenDmieA35mWMi2",
  "key10": "2uHNsnhGP7gf8oGWmHAP6spY4kAmAoWC1MQAdF7MpJMQ8418jYz6qp2jynMauy8Enzo12fwmaXk7CDC7niwNrDLh",
  "key11": "3bmeK5jymYb1EDe4oTwtoJkn7XkpbM5ye87JfF1PzWa5Vppscgvt4Q7XWPzRv95DmULczL8rySjHJoV2KJBX9B39",
  "key12": "4bjcPfAsbTvaUD9rBhPYozRTi8Qvu64WtjewYqvVExRA9u8onskWv3KqfdRYLj4aVsjCBRpcL5HcJBQeDyPcMBkb",
  "key13": "2L5MLSD4qiWyAYc9ywifzehUnKup5MJFpwdmBhpyr61T387zSiL18SvartY1wuuw6vDdXEUgTCBNqN3gJaGes71V",
  "key14": "NHpf7dFZzcK5H7BZpPc5xJ2h2CqYTLD3nBB9yARbMYx14AKyf4bhFkdJAm9UNyHRuKGFwRnaYypLVJXLexpFa8u",
  "key15": "3XmQ9P3grfBP3eC8MUSduq4hztmJCiQE9uvmrR9iu67wozsARfkSzrEhadMVZ9c6Lbn9QL9kwjfLJQUnEkJsZ1Lt",
  "key16": "ir5RfAKxQo3jyoLUqBG4u5PRAb3t7YZDC1cdanVPL6c67pk3gmAN3BAkD1RMAJdqZod3tgpb5qPkL2JXmxcHqpr",
  "key17": "2iNuERv7b4418uRGA2AgyqXCKP5QPjXD79qsdQPUMgoZa5CkzHuX4H8Xy8icqYLmHZfu4cffvrShTShS4he39XCf",
  "key18": "2A9Q6ByueCasPBHoh4quLNoLYCoZBQT6q2XujfPwAFExrgyQ8qNFtKQxDaAkQe5NRPfNTVmJjAAXE9MKUmMXRoVc",
  "key19": "3pd1tKGCDzF5i6JjiVxWPVHXorj9BHNDwHFFTCQCudeL1tkf9hY5Yt7ZD7wfc8QfsWWB1vyJSHM2xDXeA5XpSM9D",
  "key20": "2tkEN21qJJgNWGtetUozms8VpBX86PwmWcLDjRwbqvpoFLAtLJcUjof3BuqiPuczn1xpwg8Fy9x9Fa2jYUVwUsu2",
  "key21": "3zCNmvirBS2pHAaBX3SFAQ4yc7wELSoVrBLn7ZJC44PDm9d6qsu3KR2TM64FGv1Mzwio6aqCNmXTr3VEg7zx3xWj",
  "key22": "3CegX2TmtZaWJorhWgYBbvaR4oWWMpHzzVZv3HCnERwfwqzEmRpxVyLKuDhMxeQkkSbQRvuhBhvUg9c8XAQs4whJ",
  "key23": "5L8qw3Fy2B4bjrqYJ3qT3nkhuFZ1mdLyigegu6dsoV32mtsorZANXCgs7G4tEADnSs3BpiBpBTbLeGedsdFXevyo",
  "key24": "3qvcFW74yJG2oZiV2unaFaXo3YoHViDnVEBz2u9sf47kcThNXH1jK5H5fY83MKiFNKpymLvCBXE1hiFUTEoM7XYs",
  "key25": "2cM3hb6GMJi6MTQzPHdsFvG9K3QJLqtPEAt1SKKRid7uGa2ttKC1qV3cgATu4oWtLfHeLA2kKWhWw61yjXN4JWnC",
  "key26": "51zhNvi3KPysncewQ4e2a3f6kKQxcApvzPuVkovgb6HT4WM8E7HjGuQXZdHAbGaRCU8JWvSJM7LuomtUY8efDP2U",
  "key27": "4EJ8pYJEaMPh6ydCHxwEzXoBpQQ8nGzfffCHemJgCx7ym1R2Ro2P3UidGZaWvTNEYEfwDbg5P6uuLe2Ei13JLJAp",
  "key28": "3XGoJmQ2JxEiNH483A913oZCN1vDEPettuuo1LLVwjVMGkixeykLZ5VtuubvweNM1FudWgs5bGt7Z4jKVxjkFdsP",
  "key29": "edMCz253FMehWzB2apJBfR8XAAJdCDpvJYsADbsi1p6LNkEo4nN8q85Lj1WrtBFyNTsKsjN5MMrQWSm66zGojDy",
  "key30": "4bfxdNueuZ5pCZRiiv9P1ufjVPBhwBw2LRnXaEuf1DgAH3UphXkh5TbdPFopc31TTEJW5En6XrRbGuc7GG5hvkdg",
  "key31": "2wFYXWRCc9fPLFSBuYYVF86b7t1vuMJgM3F6d7FRPT4aB6ZfGYZKeoki5Sa7sv95FBdtCYjYjbM9ENT7rHCcjuuk",
  "key32": "4FDQ989R5pYBhDAQ9TpyGRttMfjdk53JxGXGm9rRBDqqqMcWA1XL92UvWzNvfGHRFfYst4DPtg33J1MK25Wufkjf",
  "key33": "4kzEMweoKidu1GUMx3amipjNyW8ngvh7CTEWbDieE3ezoUtjTPzmihgDtFSAmDfRZBsedkQBeshJirKuq3GAkRvJ",
  "key34": "1ojN3PVyNyMELxXEjrwLyoyJHZTWcfUz5ggAxan2N81U7UAxteA8JrjNYEdUExGHzd9eSNW1VQcW4UTBxp7ZEcN",
  "key35": "4NLabrigDSfdykcgP8KWxuhoiDg3ZQUJ3QuChUg9aP3bFxucg8FRnM2tKLECMcdAkxBDZZWReW65UPSrquwtF2Fv"
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
