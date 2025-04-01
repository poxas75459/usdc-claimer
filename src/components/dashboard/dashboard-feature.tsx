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
    "DCiNXe8EjeNDQ9kdQcbS4gXrbTU8znBXVUizZBfGTPryydxeC55M4jHGnMRLEqhRPRto16ER5Jw47CQP9oVhAqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YkpBNti641MJfZoqNy9aXfYzwA1NwfkE1GqoJjnBD6gWz6cAgbGqYictVAxkR7XVM3r9H3V2ozcfw5McLDuKYh4",
  "key1": "4DPU29du8m4TzcwejiYSsbV5J49hJea1PDt2Uy873wSoFkvg6Zq6Svq4vrbFXNCYRG8hh5GRbvTnqswqwn8rrU1w",
  "key2": "3946UcDhMDPDR5GGrd5wFqX65DMczHG3NDfhF3VtFmn8JZARjm8tCfLG1wnzeCbBgdy4W9pEMBm8HByNRJbftrtg",
  "key3": "2rEBjEnJHRpR7QotZXv6d9bGzaK7HiXhBU6XYHs8kNQwGgmSe8NyFL6AsRGYDK1K9JgW1hLr1qx3Wb6Xex3baQmu",
  "key4": "5DwH461pPNnC4HZAeiYJQZLvi4whYq3s7wcvBjsUfrDVobLxaAZD996xaeeU8xQ78kifWxjFAUHJnC75G8aCXMfT",
  "key5": "4ZrqHWCsx9CRaiBPypcoiQEwaNBEvGbsAaUin41mmC5Xtzd5AzPaGWZpu5oCv7enrYG4qYJKXhmPfyz4SHSHLm14",
  "key6": "FzUh9UYRQjt8ZTL8Up1eXxM4yhsfFM4b3vHNTUSbs2ZVqfYY8Zr1wcYvumKAe8Eg3pkNJX9tokWaYGjE8LRPY2d",
  "key7": "4uPYvqxbs2cPmeko2dqgq4dJTWcxMjsV4HFVcXJ9iSVSiqEvVsVJAJ4Vm4Vg54TpbPBwCjUkepctZpnr3LabviDe",
  "key8": "2asXsJHFL57vb6LsvRqh1gf8og1khCFSc8Ap7TEcKpTn4iXJn6CYiZKoJa9dHWH2noBBs2ozidjjTVnLjavmD7YC",
  "key9": "4rsdUuJZfBJmBi1isaFP3CAdeeawMxwjEvG2AskNERishzrH3DRGMJR2FJHWVZM6SLvsnwecNRQyFCXAGn1VhzAL",
  "key10": "2GXL7QCJ5sQfgggFCBwevASLLWeAKHw2TaEzCAH2BsHUY4Dv6ExHxRrdY3uChAXAbLsp2XKMj7BQ2XfLmGQKAiAP",
  "key11": "4fJaZtEEnicyGTYK3Ka2y3s2TdPuAVi3LMHr95vgzYF927TwXbXGdwVFYQGRnTNFunpAcFswhvPMssi6HsK2z64e",
  "key12": "5jLqnG7oQFyWyNqF6pybb4PEURJ6Ej7jMYZEQhtcdowNHyRSdE3uF2BnYG4MaFQEdkuJ3d7evaRv15vUTKJdUu53",
  "key13": "3QRgzoGsDbJP2CERtugyx8vKSjNYzYnsxhxkscNFu4NihMur2JsVFmKhdL2Zqt99C84LY7w98PHS7nbPLdN9x1LM",
  "key14": "5nEAV6JqyWtbNVcMUfH5QfiJyrUDYK2Zb8Z5FgZvG4DupaG5UyarjVYR6U74dKsZK1uH2PdKjxiVafx8aMnNpoDt",
  "key15": "TzWmRLsBinYv1rQYTDWbQNwHkjMo12ZssL8stjmCc4r4DTU4mhvAhnBfGz1ipytNTFS16esx7VXx9ZxEPmiPUMA",
  "key16": "eSPXUYZRSKhQpiuqJczvajsZPFrKNcbYhb6cyN2kVAdoyLqXXV8WbYzLmBz5qUHkwVTTfshuzkijximMUcDrCCP",
  "key17": "4RCLS68ZSTMkSC1YzN8RBG9tVCbTS9ZYw2YVUQJp2UjEaYWHegicyVGY2hfi7xbLUt3Whnj3jCxkEZvTKDhXGXJ8",
  "key18": "4w1u1daui8uDzRbdh455re3cHoQGZFHGVMngPmQ6Gv6WzQ4iZvPEGTNyqCEgXyyaoHzkXECfgCyFZ2hoTV7jzYmM",
  "key19": "3X2qWxaGfVrCpBYpQ1yy7Mov8wyP9QfDWgyfkzX9k1ARGFWkAk3zzDn7TscvYZbmvwJWy8pUdyWdJaB95ytUBpML",
  "key20": "22Dpo6DGdXso8tVhRgVWTUuXPpc1Pymo3awXGEFXBumefRvsfHSszPdrkBsCKnGuTBpcRJLB52PXraaxz2HbiKi9",
  "key21": "57bZu2oYJgGbnK1xRE48WFqGg5esjUunBurP4wXAC6Fzkm6ehMd56P9FMLGh9jgcbUyGqJrZ7zip8Y252ukz119u",
  "key22": "rhCWcaN1ZWX2Kb1rCjPasRJsCDEu1bjFfXZ17Hkz8xbAQjfG8qUPUHjMbbkZgyUwNw1iP8DUYuGa8yGc2ncJpBu",
  "key23": "4gTLCazHGAahsKsp9q3KL2Cu89CpTGh2aTC4AX2BQMbNtY7ebFAtW5konN2a5MEtkcejvqHKZZ37jFyHFjDtXijg",
  "key24": "pLnWnk9MGg61rgXPJHv8uQDojFYJUtt7K6VDZ1DXmTZoi37n6mYFDsXYuLgxCSjgMkhhLnjs6p42N7RTehixG7N"
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
