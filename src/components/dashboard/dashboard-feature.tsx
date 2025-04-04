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
    "126Kz53n5URCML5imBexeyypj76QpmjusWgDEsWBRZ5KkJaqrfUEzzwmEEx2zV1PxRqFY2SbUBGF7j4K41Cbv9j6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BvJrNmPLhwhHkCb39R4FC99RKDxfRqEFErAuqk2czjXKnFZs8SmdBLj2x9XDi3ZNksxdhSVAfSssyVydRMWuS41",
  "key1": "3ivnNzkzXfXkQXuaVLQsZu72G2sdURmBxqR9DGC3M1Y4qZHy3xeZMfakq3yximAmg2zEYtpWPSKiaZcyK4nXjS16",
  "key2": "4RHFX7DGXjDyY5tXwoZpai2f4qg7tuEiJsztpki26YuTX4LxY175c6HoXRH9Gn63ECC6jqbBKgpGrwmWJE6SKXg2",
  "key3": "VRwDnDkQ36rZnACaDjKFZGCqMH7q7KfxZXP1e3LbgTD2U761MZsNgh8YCByKXKPusv8fMUdfxBrvhq5s4V76uFj",
  "key4": "3uHZFfBAhZ3anWwX5WyucJ7H9WDTJRkkBRZtR5mwkvuj2R8ijCxmE1hL82McYJDG6vH2Nxm4rMbXK8cYTqzRTzEf",
  "key5": "5YCbbkmQX5iLibfdmmPf4AC3K8MJFwQH6KmL1rEmg8jVZPRtqxBP25ZsnY2wSBCuRAvV217KVnDM8A2dXeQG1x3x",
  "key6": "3h1Us2Zd6GBVV3eGzABJGfo7bPGWZzcCXyrx8jNsDJtpn4DN1SieUvTsSweWYb6Eks5png8gHDY3wzMCEy6Wg7S1",
  "key7": "4qZH8BEZ8achDaMstDaitgohSi9eNe3QV3NaSBciRSq8sNMNyihVHnaiAe3VgMoa8JsdbwzR5eNhYRUs5en7yJUr",
  "key8": "sGm89ufBy48Rkd19TWPN4gPHofzosNAfiqxEW6mMzNemucFsoNZuhrAXUfuh4CCS81TuB77oHwHpivrEFzQJGH6",
  "key9": "41Y7f8mW9KihboeEbd4qQoDaKHdCB8sPekHR8UQicXVZVZKtuBdwArGzgoqdMeVdX874G6Y3L5mZRzeucjM1Pd37",
  "key10": "AXTqnDJ9TQxsph3WAwRF5dJAGwh2s2ddXa5yDj77g4Evq4kC2CNPgnHCRj7zXwiJfyaMKmUxWWLrvH6YtdmBrZR",
  "key11": "5Hz7V8E8ZcaxfHXAhfKGufpMcWrsDnT2M7EYj85BsTxm4GmwAAuLiBSUhYpYCu6LjtEwvZvhJZcxEe2Tz9S1CpLC",
  "key12": "3Nas59WEcpsma6scrV8fLdcbro9WMfRGHkoCTsBtDps6tT7ed3prqdjPabhhdDeN1FXpbMmPrhpVcQe9UpCZz1sd",
  "key13": "2qyu9A1m4zCWh7XVsgeLxWudmgvgG3reUkjX1ZRtLweW8eEP9H3hNLrV9sm2zjfTTvatAh6H5y9CYWmFdfAmTPkv",
  "key14": "4xQSofvmLZ4YJy8BGuywv5RiWN5FLZXNu2Pzjs3yxUdjiq5havenScYgD74xxVcQaBbZYJmLFoGTBw3odi9xdDWc",
  "key15": "2gjPDCMSTrvBGQTsqmAu53UK1vcozx6qspMRCYkP3xgWXQWqPeseLgfD5kCEqCAEfPAbFu2zsobuS4EjMXRqXUsw",
  "key16": "4c2NtiCZz8MHFDB7ExAgvAsLK1KbGqPzHbAYZXKe6obb4vGfYTdZBXsgcihdKX8ZhzNsDGoZM9MKCqCcQ9jqevNn",
  "key17": "4d1pBBMDMmdjxHgxnPwDqaVpYEoBgh2S7PNz4uPPdnTfVKQpAjKPbJqZDVZVZGopFVRyGsnHGPYzw8i66A3w2eib",
  "key18": "4dnsc9MNDCXVK72zp2oNnQVo7qoDqgzT5bSPaCquNmdLszpqSV2szvj7EpS1CeD9nKh9ET7iWrYKv9MgNCQnaUvU",
  "key19": "FYpnFz3WPwxgjsHFZDwm8zE9vffrmYPTW8BUsA9Me6wfokYdrwjuiLXWeMwQaXNn6gDNQhRjiEYu1EzokzUeq92",
  "key20": "4ujN4FBCAmMU1EwYVCjoW2ky7qpM8um2vi31nATq77vUeLo4cejGThcJh36TwCJznJn5H4dTCdVQXY3o5m1RiKM7",
  "key21": "3r1hmsM3EpEMmHTgVEAcLiCwqeXt5fSe87NCkbEaQzzzftUy2RtxDWXQp6yqZ7bbYnst5QhmqfkPk4PmLyxJwt6A",
  "key22": "5ZBgkHmfdSvRvvAuAtLP2UZnayJe6e3AF4x12gyPxAzhNFj3BCn1CnJxSK2PbxVqVNWa5MmHSyeSHPXhfwS1asSG",
  "key23": "nTh6dwaHp8HNj16D3PYHeisNaAEAc88V2iz7Gqu7bxoKB4c2C13U2wanhKo6KLVLDYVpVLa2Gi1SSoMY9c9QTPb",
  "key24": "5kzdD5Ft8H6iKUNzG9n5FTtWhnR7EQQqmZwANtJRU7RJBgofGbAuMTgqKNHmXuqTXftkahaaEErtZFbZPAeXXoik"
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
