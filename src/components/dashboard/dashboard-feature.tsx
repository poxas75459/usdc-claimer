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
    "9JYZFbGfErbB1kx4c8xMSQ8J17pabrNmogQR1JZmFrdSVBwK9kr9XibB4h5kXZ9f6a6Q6rTBfUm2Fwnxa8vxiCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tMcVWk5HfvwqqLpNDxdScyCoFvVDkdNuvPaQL1Prg4gptanp2i8zvf9nehjFsoHKQgh3wM53cDuHzTgk8kLQm5n",
  "key1": "4TJzrvbygcwba8dsnExPsb1HGiPCBaffiVATPBaF6wwwQJGLbGadjqsyNKpoHTr6FGxitp4QjpgrRzqtWEmPynDc",
  "key2": "fwLT5u4y9f3AuGMNRtwPZsNkZUq7ni11j9Hj31vx9JM5YAS3PmFdW9WY9S7vUAinMACoU5zKW5dVw32KBmg4N9f",
  "key3": "26gnBhnuNnRSwVWiLRBW4db1BGq49t95WXBvti8bduVFukYXvUjo44kDQBimiYDU4HevSeJd3QM2MSf5sYWjnvzq",
  "key4": "5rxjp3z4RLuCrEzB2f7qwKac9ZFxFx7LBCgbKekYVdDDmDeAmmhYCi1TsHD61NbmEqYQDUmS9JCZVbkToqzo8E1k",
  "key5": "3qeBKAD7uzwnmpKqYsejozJtPsGDKETCkrNdjPvvBXFmv2D8npahwgGeCfrZrWxoCJxtHF9S8XGfg3DuSpfgq4pZ",
  "key6": "4UwFoF9UnAS1d4votpwfa5QeYdLKCvShgY3Kyy3NvfHUTbQXXCoAX8tAgs9bN2einrKRpP5vbQfyvyvyctLoRp4q",
  "key7": "3jwtm1Qw1EUkCtcqTMECuFBo8X7hcSpdkikWTomoNiY6QRLtF1Hsiw7HMGto5NbZe6TwcrXQPXc2fZcQJaLeWPnm",
  "key8": "3h2xGz7gXcWRgHr975zgzq8fE35Muqpjx2A1RHp24RSv4Symw9JCeAegMWZstZ3ByapmXiQNhpRTHaH5ZJEpeEfb",
  "key9": "5niMQujn3WKeieV3cTRktyzxRtR7w1tF6ZFC2hiUkMCEFDydpaEpMmXRYvt7vmZeCzd2VAbZTyG4HNTq3tANDan4",
  "key10": "5pGAVM7P88ymcqeWXLsis5EWr3SG4KVfgAPxo4qVCLStMBRGvhFF2KW9p2Rud5gMDxfRvpya3zvoH1ZPauErzZMJ",
  "key11": "5GLn2L3QB92Vz1TKYU5JE13qyimdWrZG5Te6r2Zd4vQsAn2D2zCXYi7d6Vn5kg1c7zPqWKMSQdixpx6KzZLk1vso",
  "key12": "5YEKnr3wbZ5yvxjwqoTPzzxbxAzXvunKbhvAqXqkiPGWR8MLTMDqThxczJFy7F3pYRuVXp6wYrnu8DzWwjiqp4ry",
  "key13": "4AHqkES9f3ZwZKu94fc16xF3XwntE2AV55FB3dUTmRSF5kmh24jFay8cp4chrfVaHdAxkgcUXuZiAhJ74DzPWws9",
  "key14": "2SrAZvA8GBZvChbWb7TdGYBWdHUfPzsSfAzQwsqXbAn7Un65FQToVWNdHVndWacdEk32aHLihTZetYNdTzqM4i4i",
  "key15": "2VrKLfwnMv41jx24XXZYvtq1QAhVx1acLw3hau5NMuqC3ZXjC3BNPtiDsUEYtbvHX4khjMf4B1xWeqFaRbbmfdjP",
  "key16": "4mdaY9xuwVJA3txaitV5h56S8BTsXyyLKwwv4jJ6CUvnQTiyCYZz7ciD89isPobGrqETLKmguZXX6cvEH7bMtzQ4",
  "key17": "a2JbEsov4PPzyszpxTiDs3xQ8o69NGHGz3R4JTo84jT3TJErQd38JEYybbu9mry4aKmkT6feFki52FY1xR2XaE5",
  "key18": "3vRJ228yvDbaXMGkjtfYd2ht7nPcKy9BP6GhseB25GVKVagqAUsSDbExWWqZ9tchymZbrGBQKzPsWhiUHfw42TNH",
  "key19": "3obdSZdUaeLTY7Raa46Yeg9FZDrWY61MGGsMhmCD5fBAgRC5mRdgwWFFMu5bNCNDLx6ozzD2jGTUiJwPyvHBm7dY",
  "key20": "2cKPYGGiueGrKNCRmgWTKYh3SH3jdvmAHK1jXvzVdgkAYAuJSCpnzjv66GJks68E8n7mXKrh2v6zWkMrUBYvj5gR",
  "key21": "2ePzonjg3wQSyLidzS2c5GAaqL2ictzrzmvTwb2fybdLw6rwaucAY4XrqkoedGrTnWJLPfifWzxvb9DmJVBvtfub",
  "key22": "q6yzTbZxhRrd9UyxtcVXtihYXcvsPbDfneCwjPy63tDZgyyeuHrvMroFDXjLXZwFd2n1Qw5BpqFFFHsfEgeaoTY",
  "key23": "4vMgqRwD3oiXpGL34pr2WXqjHaC1yhKUFEbn8tCKJYy4FfjTCUwm6T1wWLyPKEFMu54vatAGz63JhQFq4HGUXd52",
  "key24": "rqfkXC66mPeRWZpFA3cEzw9PM1b2qWKffPV7ufSzhtCPuekh4Rwsa1hfKEH5CVQDxpa7E7C5JdtgQpUSpdnv3jk"
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
