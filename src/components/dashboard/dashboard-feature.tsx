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
    "4eDjguXBCL7BnVB1oFbuBMWR243ohNiVvWj1AH5vfX3roCXfT65z54EkQoYw4FeDye7dK3MUh164F9CtCruppfoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "unj5NCRpHg9MYB3MyafXsvFSJXEnQjuAiXXKCM3p4fjzSc1SRrJsarj4ecJKvZvz9rXy1nVAYDXesvrCn6oLZey",
  "key1": "5CgVa1ABG53PYm6RbEH3BEGf8845YngdfZqaHx7Yue4ZRALKRgBfxUCgkAH46z7tEkj3zBcQQ7smQN1F6tqbWP4G",
  "key2": "3oHGxECRYmDXJaysjcFzsWLgs2bqJPA618kxhd4ZYPyvUE4aJB67xVpgnWi3UdjVscxCfZgKCHtBkBGzihqN8BUP",
  "key3": "51jPPu51ShuhLUHrbjoNHunVSfuvM2YhzU85rY2kxStxTBsxytBHGub3Y6ncKi9tWvhChst9879cK93bMnbNSwvx",
  "key4": "5dmWMvGg9PeYA9Eka8YhzEUzFH5DDKzGTrgU5YbETWUwCvYYrBk6mksWwVfTT48azUZr7MsUs1VaNVeimcYMM6Hs",
  "key5": "DMj5xcUomqLxoVQ2nGSxzgUe4NjEu3z7miGYY4dHi4GeKW7Mk8KbzmjytmQKu1kHt4QKC5KRZD3WfW6BCxYUtpG",
  "key6": "5xkhX8xKRk2Q8fLBndM8Hu2GE8xxxLx3ZXbzpvhHvJvTniQ9cARF6nc5yjWTW5ABkBUWd9P9JTgFXgw28BTMebES",
  "key7": "5rxbV3s5d1DH7M7qqyxz99aEx3cACCQbGKhavLbFma2Jpi4Zy21DnK5MmP3yBGnzynRUtCtJLrbHNYngQxFxusgm",
  "key8": "3mCppH8fgsp82uC9RLcLkVhi2VeyG4aB5Mc2s4TwZgJ4ctvf13E3fHFXWgm5CU88qPBYeq9XyvLi3tyVENpcy9i",
  "key9": "3xkzS6hy4muzMSJ2JNahY2o2XKYcxAcTVFwrUR1iTMAb6HVbDMN7rfrj1arLdSymF7SFaToN6Px21scdcUsj6ygL",
  "key10": "2Ydzkve2WmSDqKCoFV2WKTj3Ux9Za3DyYoKpBFrwkAVN5kTDduSQQaZpdYreiXVq7SceU2Kbr12CHYvBF6VHHuHp",
  "key11": "4PHh8LUHaoBUAqSnSYu8RntrmNudgzQGHSbV2jLpKYSiLeC2q7ZaaHVBxhYVzNmAzo8TXhq9JL8nck73WMcnrYfQ",
  "key12": "2tRtznz7v5596PACarM7jbzYvV1Rg8P6xuMgCfNxcTCU37gfNaoxjfUgzHdMTfMJTbZhRn1FrkEDSRaf53LGwJeM",
  "key13": "22bvnoxcnf1JjXQajXYP841cwZAToF6p4GMRSnBVFimgnitZLZg7wJabVtWYEKaWwMjncwNTbo9LKCF1FNLq6eRx",
  "key14": "4EDW5VJNB2rDW122KYr1nX9QcDm22LXDr1W22hCGVMmKK3SWe9N6vF4gsj4o7Y1TbYnDiXTyV4mGxK3CdV333V89",
  "key15": "3vNBARHniMigqrZH6xshXYwFYXHTaU4HGQ5Gy6dT4E2MpcrEXU2iqHVzWAfVRfaw9EmWa7QDdWY4PdW7GyatJQvR",
  "key16": "SMmAnwKihHRs6VxosTHcd1Y5G52fBJB9AJai87ysqLeAQuDzRmCkjbwqUYJsarBmgRQtXATANuCVS9NoQqDckpH",
  "key17": "bP3tj6msZMLbWhYDTB4Ezy9c3xvTkYDXRgqRcTPBoq9ENyAPAacPr8x15mNRJdF9B3jG2iKFaM2P5KP5ABziCcw",
  "key18": "54dikGyvHGvT919vuA1J4ev7frygPi5XRw3UuZ6GYgASsjkxWa9ortoDuDaj9Y4QndsB8cAEjCVEZeS119V1w6hS",
  "key19": "57QgipVjm2DHiZabVko1kCVwapkPyznirsCqSB64YsZkH6rfHSexciuXCpMYeEC7e2AtEjY9UnWf5wXwSWg7U3oS",
  "key20": "qjGxxpVkYNgWaaDhv83huF9ajDpKLwnWpsTf6ea7ftWwZuMwhW8nn7BTwdgzpjxrEemJymtR2g1Tkcyv2H4jdMV",
  "key21": "42tJ3AYo4XEP4KVFYwGGwKA1VHwN9TuF4BEpae9R3e5xzsNR8XfWBUY9EtzqhpcRCQGwv7NR5wrzLu9yjnw25VtU",
  "key22": "2MHJXGbmo6byyG9EFF2C1yb8Vf36s6nR8ULdErXdeQL288AK1txMCsAQtmF8YfLdtkP44Xn5V6CwdgwxHdSvYLLT",
  "key23": "3i9Ba3bm2i1mDZZHAKn8FdEjxpVuqoQV3GUCS7epvCyjXBwu3pLzaV8X7dRqETRwTikkf6wjXLvtiCG58ikgdMUF",
  "key24": "5mUB3LobWedW1H3jDshbAvUnF8qnQtrmQFCfhpresPR7FpKRwHsMs8HdV16riwqZxCHgMbhTJ7JrJiemRad6Z9Ze",
  "key25": "3iWheNFr8R6uFYmyroByyQxRaAaHgKWy8qNuHwSyMXNbTSznc8DoEe3MSucKcbU5FNXvidFHDXRqdyDxjv5iEXEC",
  "key26": "2v7BYrCdGPSAtm2KzERfXzti5CJWF6RsAeKrEUePsYq5FUcnmGqBK1QFQ6fHyrWsM3767YJ3nuEFcGtmRk88GoC5",
  "key27": "4i9Ycks8SWCZxF9zZJTvVWHidYqL67UoTS7rEJkrvWkKrxzg1H4NRQa94WXCCSz6rsAXP8NsVEgJw858y9Y8cefp",
  "key28": "3HHw6GdUTTk6rYEUZVTcZ8x71PgCRUkDLzsWpfdizgmv1zpZ1r6SAUSjBwrwmj5qoXPG7bXwar8JdLP9ah33wL3k",
  "key29": "3sncyR2GCJTt2Ln8EkvhznCknnkxXSkVB9R7R2wmhQUiF9S7zh3dDe2qe7w5Ar3hkiq2Y8bpbYyPg9pEn3njWWEC"
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
