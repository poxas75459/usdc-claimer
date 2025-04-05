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
    "4ECGSoxkw93yBgdYPDRjALfqa4nhZBLoZekSnrtjHJY4gbvU4R4qaMKyUFhnuhnpVzm6GF5y2SDDgWagu1dyz6qU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51rhCrhzvHCsFKJ2oUGFZkNJqp8SUoXjct9FcxXizwV1iGoGRJcnHXnC6nG3172snwaZBQU91Lv4VA3QmhHzcerV",
  "key1": "3L9TDy4jhLh5YpKU5LLqMxAGXYhaj944dpqK7KYfAjbHr8p4DwRWscvqs8HB4htHcjbx8f1b3m98JSiMpQcTwcEe",
  "key2": "4ooLHsazrnVvQpKXkCneZkDwmsKfxVD7MwicechJaidec97Cc8SSt4sMqLSwm2EYmpaLd3qwC5EwDY4ZCb4dY2rS",
  "key3": "xSSqDEUu1AByJ91AS3SdkPqvywUYn6anuqJUQLVr3EMG9YVR825YJCiEmVn7aFn31hk6oBwa3xshd2jFakEez4f",
  "key4": "2gq1Z8ZGqyU2EoE8ic4r53ZdKPZxT4nKAV7CCi6RA27UjnEqasmqQzWNetwRXMT9Y4849jcADSH92HK7H9xHTVBr",
  "key5": "3c6pmLKjCHbDps4xxBtM7fnPzMhg7v4dxg6fo741TfgttXXEYCQfk7wkcXmGDNpYZ5sHejKmM9iJgKcL8bEZTDxj",
  "key6": "2REh9qSnwxyyRUgDPVrFEZkLRHhxj3gWPHYRaof2VS41179V7JcLvauJPUQgav2V3s34mAh8TBJeU73SNAkszGLy",
  "key7": "3xxjj28YSgDcm5bKA3yWZSYzaarjGjQnM1WFZPhsMPPxeMchPhystENfzooi1WgBBRXkZzSGsyfr3694UPqQfwNV",
  "key8": "PFituhDEDNBj221qNjZgN3hcZ9rwpE9W2o14T7gSEyArBcfeu8QEw4KkZeDJadMknCC3ApbzzMcFT17GgB75sPP",
  "key9": "4zcvquYwU6SUaqBVARZ5dM7zuN5xMTuRozfoc21qTrPGdcQvNPFvt7iVtMJSv6jMrxSDkRB3S7Mkbh8i32AGtKfz",
  "key10": "5roXBYKk7poVyiddYYU3AM8dPkTXa134uuyud7uLQ4CzhnaDk7nvbyWzCUsR8FB1rnE812TdBt5AFqQQ5mRhGcag",
  "key11": "5JTL5d7oBWridFMKJEReijrtDUHCyfCVdAuS5qxi9aRb8cJRtFBxfxFZtjJmrEn77dasQqsNKoyxb9Y9wroYmfqg",
  "key12": "3We1R4ZZR5HrAFfUL197KWKmN6pAAuqaGj4evcbr93L6jdTgusv2CBdHA3GXTr1wCo5eVr5SYPQ5wQrbHVdPSE4x",
  "key13": "4NB971JPMJc1PwoYDgoxckHGMe4TihRXvNvJr597KimsV7LwVTSxd7XQZxChbHG9i8JSTob6zVYm7q1PRTDiPh4n",
  "key14": "39hoGXAEXAEWrbpZ7UZx77d85XhSRKV6fZYL57eHbsY3cNZLPj2ZSV5Lbyt6YeRi9gxyaoPGFhiKKScG7KVNNsQF",
  "key15": "4PrEhHoWMM4xsLFvApe6n7NgFjPQGNvKjwxChsQrv6ee73ENN69iGY6SxL4R82NrDkxZhipVbfoS71Vs5n3T7xtV",
  "key16": "r6zNDtE2tE27Y2tqN6DUM3CtGkLUpjuG3HDLcGEAxBZGGxHMuVVu6No4rtsyjEU2ZStG8gELPVibsDR14PYcEhi",
  "key17": "4rn87zWwEPY3zFrVvqfCrR72binN5UTQsT3tNWRPtzhTVh5kbLmwC2HQBGXuLXiup1bbByAcY8K2oRL3oKYNBx5E",
  "key18": "2DTR6KanCfyR6YuhaTw5qznjJmrjcqcP9LBsEBDrzYXNoRoR2XNoMCJLRnDLXBivhi4B4g6MZs2feHoKj36CqZ9i",
  "key19": "3jPwgaLVTVmmpNMZskqNYhA4X1TkDi6zEUehdo41UkTTAxi7c3ukeeyXHAxSBZPDq2zvP7rzUS5xBXFKW32ZwnbY",
  "key20": "4f1m95aVhsEa59LCeH38cpbiKBNkTMs4FhZ8wrxpaKLWpNzhZv2Z3B56kxEFXhrWtt2mZ4AjqnAVSF7cTebV3qbb",
  "key21": "287HWP6TeX6MuJ9XqbnxZbBnb4KAAUo3eM8ibs6XuMHMqWmxJnRwM2WEXLU5Xzvz5rxa4pzsm94HUJVvWRTrpumT",
  "key22": "xTN1esrpK5oeLNzERmFjr4tdrvUZGoihs9vtp8v7SUbprHggb4XurRoKHBMmi7ng61x6pyxiF6ecs42Zh7BTABE",
  "key23": "36kPpmCKbV3d3uumSASdNV3MKaA3MWhBXH9Lvwevxvks1M2ZTyr6HcGUFvgoKXsf5zuhuBY7AE3YnVTqACmGqD8P",
  "key24": "4KEqro6TZcA6R7Hkdz5wHgGmLGLzCLTzYPZRY68wvM1mABYo9uMMWnEpEoUSS9jp5wC5vTcMYRjv8DMAU3o38Kiq",
  "key25": "3DyQhnWC1GDtCpG1A4oeakjawZmXTsPftD2foQboZ7HETPtpJuP381xRh4rcSjuvZk1n3voLx1hmXDjuux7fPuzw",
  "key26": "4HXP8Y8MYwirdyZy2rNGtcSqCxiVcDWTdLqmkEFJajW2tkh2CBy73SXCeyVXvSoV53ZhqzJLFTNcawKWHyYxA6r5"
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
