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
    "4teY3jJaGRvvfRMXWBLSCZLHFgUnTLgvHkpEE7MLgA6PNenbDJdpqN8bDKf12DXnmLP1qVLzoX4EpXx5BLGuBoMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wfjanVBrn4qGbrMXYTn8ggzVdpNhV475Po9NcEWjNAK1bbBkdXEyC48T8zk1u7xTPn7anXketyQXQqDuvTAEHNo",
  "key1": "3Z6Hb2KSM9Tz3BH18eMghvTqFbnsWZ9eWAisqvDourFbRBxiFaxVCocQXg4AfLiEc7HjAaVDsbKxjNXJgj53dNz4",
  "key2": "3Pk9UC5rr4grVP3hj1ntSFEG5pEmUjw8gcfrurGZkgC662VM6raL9tv8VWwD3Ygno11GzoXQgf3usMGp5EQzP2G1",
  "key3": "2SPT4fPnG65d8FvGTmAQea9gns6nrz2SXLEZVnsKkBiJJjY3cB4FUpLsuUagBj7bCwQvGNviRP5aEnp554DiHHRV",
  "key4": "mCwxbTwjwqinnFEKuvzNkWUySFzHcZjZ7fpzatqN4xDL2jTL5aRKvDsxtoFcfZXAfZbh3oBS1Bo6rtVT1j5XrDN",
  "key5": "7nTB6GzW6kf6EXkW3W3N3S4ssBGXDUhGXcLMVcmhAFxv4yv3w1Gz9NSZUKdmmYVCG5JGVFpHPMNzALtSa6UGLi2",
  "key6": "3Wfwq8K2SAiDGUe3tEoKwaSjFCj3ruPsbgrwipZ1h3Lypa3MiNWWkHJceHgD4563tygpH6xmyZsXeF5BLZWowBSo",
  "key7": "52KbHkcYiqwVL3ZNXVvKK7TXfQVyt6QkgbMEmGM8K8FxayAh8e1XsY54tsajucjUVFymZYkAwAnCLLv3drohnrC8",
  "key8": "3vruyaMhNJ9H7cMGe86ryVGD1icefp8c1zx6w31XTWqY6gXkpC5aA1jhKvKgTT9n7rJFeWPQBRiK68sf69ZPAw5v",
  "key9": "5cWLUtz9pU2R7gQ6wgWa1t1sNKGcQRF8saYY2zwXbihb2XBsr7iDB8qopL72LNuzZDh1BWftW1mcXW39kwM94Jsy",
  "key10": "3RF9oq12uRP45JVtzP7EVtsdanCMoyTup5eMmhPD7C9ZMBmJ7AjLgdyVMCE35J7mBWEjERkzJjuyie3CkM9YWf2i",
  "key11": "5suQiu84zqsd74JvN2bLzXRvifyP9Hu491V3dSpLFxEMgHnwYNKGPppbDznD4YA4fgxAr5xHE7WS2zT1jRXA3MtU",
  "key12": "5W3qycd3mTZoYJyYopDUtQeWjoisJrxPNgXufpUED2YM7MRUHcbLt9mXWW5yqqxJAJ7qGJtAKN4CrrYAjfPidquQ",
  "key13": "LpRVgciAyddkJyxJidkGWdB3eF86NLbHM7qdR4KoWupqKJLHBhy7hnqsMaHWSxiyxKYfXA9s9tSXwYQHpZVuZtT",
  "key14": "21xAUSu28JYjko5588nj1RnnMTgQsWhAGdphNGoQVaFPi4myHaKWJuiHkDwtAV6ntWFTM7EM8JuEPJdG27P2msWm",
  "key15": "2XepB5d2gynz6yVx7CcCoWnFREAY23L75jdtK7uRc4zvu3XSpxFTzJ6whhqqkpdfyRhzdtsxM1hguhnENA6RHe7b",
  "key16": "5DfD3tkn2Zf9TRJsbc2Fio9iFfzLvTHQR2wWTbow4THK2UQFNpWusowiVhkWaDU4aVjtnf5wcpba98SyRtaAwGBB",
  "key17": "HAvivQFqhEQbHPZCZhQWkLfxfnxCD3QMuL5tMXYipVHye5nDkxo9CbyAx4KaM45QFwbpR4r69Fw77jCVFaCQdag",
  "key18": "5t2gknPRomNAFXnidYo9Gam1JAnCm1DFMGnZj5bUnXnYpLN3uzAuenYD7Gn89HkobL3QszBLE6Rv9p56MyUBsM9w",
  "key19": "kkt8BTfHafvS8voPWcK8BcqxmaHn8pY5Y6SKT3RjZEDSk3Sjnf6E7YFq7akZDkSAaWHXJo4ymDBcZHRzssJa5LX",
  "key20": "GY7R69Tqdoaks3huPrmrkKqMaSCH168eMZJEeiBtxuK9ap2Qwt9JarnKNLoBwEAiTQkbzmaD4TKEEo6GQyHvqGG",
  "key21": "2eJcBHNiuyHjDSyHK5tBS71oUk7D65MU6XtgigEtpsiP2fy4Mvd9bCuKfgJiup543rKab9oCGy2rvBqiQwxo4BrF",
  "key22": "5Qj8P8QcS4Rt6YkNGksdDEF5Sj4Qab97ugdgauo361NGURW7A1w7WTkKq7GS5erbAu9MkePiHuxSRKcgrRY2PhPc",
  "key23": "3WBeUJcMjUaXUciFZpQScwJWyYo92S15bd4ZX3Qq2EAoeAEHdRDGFCMZfCENjGE3AHBFDPYTpgcsn8svQ93faJBQ",
  "key24": "5mVb6jmM57gAw4g9S26ADBscz79V2j9c4CZueH5QKWnES3iQRGDsnWdw4YBzyHXvgYqPEbRA4gzgx4AhzjhM4VpD",
  "key25": "5J8m6mJdF5oYtugHdHCBXa9PK7nfJZiuCSn4NSpdvAYmSGrNeL3iasVWxthvYoBgQqBLHUxm2tuvocvqzRRNtfXr",
  "key26": "4hNYayA1ms4JKPu2bbrsSKz6o5jTUxNtcopwBwMofzoMo5xsfD23b6adSBGbbgcEfsKZSwtg1ALH2K5fPDUmkty7",
  "key27": "2zwuCbjPWmFnYps5meqrShbmDbTuvHASxgHp1ASo2tQ52ggXeiJwp4wzr5EDKMxiPw5wUAQaVoP8AjSezTFiGKk",
  "key28": "5BCxccEeHYngaQnoxTyG79TBBV2LHR3K5knrfEMbyvbjDhzYvj9zbZj4pyCHCAg3qCkVp1uLp5bDK7Lza1XhvxLF",
  "key29": "74zqxDe2Kb7m5GU8tW42JDLgPu7sXJXR7D32cv1G4HHKBL8vhPiZFDa3jsUQ5QChtsZBNuq9gVzyCdmcJABVFQQ",
  "key30": "64CzTPreJTMQfVCdm2YUC9UnY1aUTqjygUDhKR74i75Wrbr7peWyvKkMbxBEKruPWDc7pGNhqfG1YJSK5AKq8xGa",
  "key31": "3vkrNH47sWfvU915PQjytMGetEMn3VYSH95eL9hCiXLXcSPA8QjbPwAV4ino64vCoBGuRQarBRv5w7sZch1fXpLs",
  "key32": "U2CyfQVHq8bhqFKn5qPzyN6SiVJLmhPqcQtQHm7dxjRkW7yiwWBG6FBj9NXiCd4YJ5KTpuPRqBCxnHUx9eMZ87f"
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
