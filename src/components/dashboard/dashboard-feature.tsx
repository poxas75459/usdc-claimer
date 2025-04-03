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
    "2mhD54iWMsYN8pNKXUYau5cfFZwgcYVZS9omXzUEXGYmbaNazw1eTptuCMYvzg1hebhnDwxErfdshwokttYewtUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qr4TKPUSyPV8zdQc9X2JAgAn7pRi6ySEhTcmrPnTSkgo2fxQqRrVUogiLNiVysjqhkUeLwwWYc8PcCGcQJamAeH",
  "key1": "2gHrqH3L4xDLBP7AyatdJGoUNXKkbMVmruqWPfrZWrGebdo7Hs4yDp829rg61gtcvrJDiorVpuUGeo8CuRutUxrJ",
  "key2": "5ZAtwC2r4Q5bdtksXt4qgrhuVwS7fMVZcegAtWCCNQ4U1DtDuYgBpjdg1cPSES9V6GyuW9nV7k5gHpXAAtCSyw3Z",
  "key3": "3PX8C6eRimEqeHq6SFMkSeKobUU8M3wdKY3PSvEAUg1mqp58mgAfJrbjKZFmpMWCm8Kmftgk6Xgg2fd9xxhE7pVs",
  "key4": "3FwpVKeaxC2tCZwxBtfP9io4YqbKpiu5x3Q7LCfCtcp3MEN9CKKudFDped25JVpUuTAPthTg9aRA95bn7d4Pzket",
  "key5": "5FAhEwRjgv1K4Hcg8qvFDuWEjLyB6pggjY7jK5niq5wKayuJC3QRechPy7usFhUT91PfQrUKCULwuo27adJSWW1W",
  "key6": "3bWSm6NJg99kZRBwPKbUdzqoiQxsWEUyjmfFLAzA5EprgRujcvCqpNqyvvNEXtVNY6U92YGBpJ415xdXbAYeLymZ",
  "key7": "4jcNW2gQmp8hA5bkyAJ2MDj3t5t4aFkyaBJyaiv2mDSCVHxHZeH3PataCN9Csuqpy3UUQX6hFwa7joyQWvq5g1F7",
  "key8": "3nmMn4kYY5eskLaeQQB8eKZiem5HhDBA3pR8QTnKRQ15Q19o7ayx2XztJqbqYWqjBtA6smmcGCV9n6P7Bhip1qEz",
  "key9": "4d4uiWo2GAkRfiWuL3eaub5VHT6EkHrHALgd9eQT2TXa157ccTfEU7sMS46ekxuWuhab3HkzLcuxEbAqJUEfPH5L",
  "key10": "oGSaCPDuYgpUcstwPWyGCGd1ei2eQk4FBN5omQsdAxowzQL1vSNCDMaAQeEVdVwZY9kN3MBiPZmDcmz2CmBVQAZ",
  "key11": "2LCLHxC9pV7cerG9CoVzJpFbHyR9jT21zhntK7fVmK3q7w4rSPbitBpj9qd3ovNuyTZjg3uVgNANtuhcLoYEpj42",
  "key12": "BNBCaNqiXsEbs94Hkc9Tr9WdCg8Tp3JSTeV3tGmP1nM6wdogaWWU2a7kcqzruTmz7yYrgbzxs8KBWFTvEYfdUDh",
  "key13": "BGMSR5eMdjtDYGRLxjtzfyzfeC87V4X8pTZrGnLhme9rcC84hFQTfQ4GvnQGq3uXCJE6C8bjXJe8i8BiRbxjbu5",
  "key14": "3UKfTTbiEhNQmFKhUk7Woa6reDVqKnAT3gqP3pQFH6KgGPft7nE2F9YF2fSFd47rb92ev9uTcszqonKmxZyXPV4u",
  "key15": "2UGAHLRmXtbJ26SdDgFPGsE3JagWmri8RJtvEME2T8xHqgSSMCAsLPVSKFmdUikrLCEPdrZpZUBF7agzDxuhG3At",
  "key16": "3sTwZgzGJkYtHARYG5prKemUHpGYrq3p4LYJrBNB7f9aKvSG35wQJ4kFaU5urD9jjWYSsyTKArzfNgRoYErviA7U",
  "key17": "4aAkB3Kr69J7GrzBRGmKvMXj3rFxrJrvuatK2NwnYSAT8SYUmnPicFDZfXnDVEzuwUNjGqiuVKvxkXUf8gV3bimi",
  "key18": "M52TjoHE9qUkxfTTpUnVEh7wctSchWXMu2TNBvcYt53hfXivSBJvHrN6CJgKnpzSERAuzqDo5M585dewzz9SVHW",
  "key19": "4VXqrQ6Ye8BpKm9o6z99UmWjaVo7GkYCgYSyPKbCzgbhZDWQ6jQ4KjuyLkFJZU4PQuX3WoYhgtaNWr48g7WqMmv1",
  "key20": "5CLkrmj2RzaFEYGLhRALuHEZLVNqTRySnX7kC3dBotBCtyGuDmWiB4dhdy1mHSyb7AtSoyG5pe42p6UAwNjKqUEM",
  "key21": "3USMM99aZf2zzMQYE2mGF53L7SJ3nZpXzV4eXto8TTW5R8C9o55WkKPKjHQycFeJqZwimecwtnz9H4924foNVM2s",
  "key22": "3svqckHpUxEutABpLKA2F2UW4gBikjem3GTJZ8uLBaeJQeq1G7cKz851a8YXrnZY2q6DXnsciuEWpD2GTu5HJCSL",
  "key23": "4o3zzDci3jqD5XHwQy8Kn2qysWLAGi1qtBncWSdh3omTZin5AjaEqRkN7fvnNmb5AcVnpcj2K21oCVXXuNN8YErR",
  "key24": "63SSSZvoSwUUewPiWmDntYtJGtrogVyPTPTkbRWeEfNAS6NGLc7KWyXsVxhpAuaQ3aU36VRn3YqcdMPEADCMx1aH",
  "key25": "5yTTdg9e2YZg5Y9XosdqaJApuDETJmtwCZLeKWTQhcD5sxBQtnRjxpBsVTLNoJdrixRzzzf4Y4yZCiEUvxzZ9Vs1",
  "key26": "3g2re3rYKPC3Y6V96s22NdGmWn7K92r6uKXHjFgPXZ7Esa8AjoGBHTrjqEdLmVpkFacQ5NvfhtGLM4xxkmFFGdBT"
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
