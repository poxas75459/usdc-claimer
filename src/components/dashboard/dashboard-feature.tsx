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
    "56kqU7p7r3ghjL62NevuaGKaVERsvTDRk3vNrR83Zi2MeCPKhP73APeobdvHBC8PR849jTmVeEhfbGeRCn9VLCYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xb7fK6DmetwgLG2aVNyFEECgeCTcTLAQGt4Ru5Rdi6D11S27xRq9458U8MSWAAkvRpBVnNdXxW4tD9tWTAwXxxc",
  "key1": "WDgSvkJUEsWLCdjPxSxpHQVfXFPiqDSP5x4atkAXfWSErkHEhfUVx8gFDqbeD3RuHs2YJTHSzhZDdYocQbSAHHN",
  "key2": "5SuST9VkrCypPQ57RHqbin9qKWEULoTa2omwz7BLfS2jGxLq77KSYKQ8AtpsZMMJ1q4fE9eAKbMb1dyv32geceed",
  "key3": "3aTqTivY6DTLzCohVhmicpS59r9v6UPWWtRU3c9tMHRrLbB25TJfGdUhmjqYqGNig1Jw7EKSv4YeE7VXUg9Z7bFs",
  "key4": "62o5139GijP2avWpSqfCYqU3uh7k9ikGYh84VKodassNkTuWqx82Sg5dtd17TcwaWuxu6Cjzvn5n9NSwPXuP3mjM",
  "key5": "3po2yW8MuGcpFC1jV7PQz8msWC5h5G1HUmynrpMtMeXuqd63sCKoQj7KgLhQLtb82E2aY7C1a5LYQpdsYHUWaPV2",
  "key6": "UowFZyLi1FNgrJVHneJdpuSR8H7JsxnWxZ8Hvv8DJrC9zaSdh1JPqospzc3wxN1vMxjiRqtbHcnS9sRU8STEhoh",
  "key7": "2xrJhqLAg2jcAJy5ejtHbu3wqzHxyaP7ZFyCit1Shu73b1GFCyyu26QK6N3zmf1HnYmCdWMuCfwAVEoWTSxdggRV",
  "key8": "33PWGSAJC633sMHAVHcmcRoduWQKimfzqx1JsbPCvcW2FVHzGLQYEnkzimFTi7xowLXkbQQhZktLyGoLZEUKp31f",
  "key9": "59tVkcgiSVsq8Zmr5a2oh34ja9CD3b6yZXKp7CZ6m6w3MmXSC7wEpz2Xiy3wXLUb4aN9v6c7y2wedXqsvxNWCS44",
  "key10": "5kuhmv6tS1VtgRT92YKtwnoLoTTyxh7KvuAPJSEsUQd9vohvB6QomJVijm844QCW86n2apgPiWu27KXUayFqrUQa",
  "key11": "541f2btMv2VcBW8R5gAqUVm7vuT7HR8MjYD7h8sgKq4BZMoeWt3GsGJLfeif5tswji66u3Twzx9e4PNmx5wm8y9q",
  "key12": "2fgT8rTRwYpSEmmEWBPQKPWpsSmbkuJA9puKUoPeJyvnhsL8vF36UrTk3okW3WFT3b1n18H9KfuK5C9NtYbXeMGn",
  "key13": "3hNGjVCjp1BnWNcvhJa5VxLznQCevtnrUtZPKBMHBnV5ExJRUanaR99EtBVaR6g1A2dn3iHYw7Sr8K4efjCGHTuW",
  "key14": "4ic8cfd3DnwXWB6tXeNFCSY638j2KM6EkTSKuKdgzjScord2UhXRcHY7xitJ4EAERnsZT539pp7dbFr2wn9c1hUz",
  "key15": "5xQkeb6HB1CYEkLRGUhuG2AEXrUswHjzgHcJ4VSJyGLaPJNo9mBXDeNjTuwadsvuNhNo9BKUwmKwQYHESaevmMzu",
  "key16": "4tAPqk4h7K48Us8YETXcTD5Ejzqbkf9wZ8aQ1XHpkKB9zDhRkYXSkETg9Nfyq3xWQJBmgTJmBAjAqCPmDtUX9VuM",
  "key17": "2Jp5EuLypBuYe2hKV6jrqz16BscubaMSjatgjq6HJ166QMo4PYAWPkHBVm59aawAGT33ZNxuURR8qbQim7yj23oe",
  "key18": "fgTyn3oRjPwsUKtdzijDiFCr3fF4S3U2bALMaVoDEPyR4TwWSjjf2ouhYVqT2kca44xYcUccgQDjzz9DRZDsgzc",
  "key19": "2311rdZn5ArkKb2y2ms9RZKkPiyY5dcqbbGXHoSy3AamTxJrte69Qa7NKRLtBeKFhB5zjoeCYVrX7AGExQLv85Hw",
  "key20": "2xnPYN8HJhd76RjEV5T1vSE673WsQ46FzsviLkecHRe9CN3oX6y6nkBdXVaBmAm9KEd4Y4egtsZUSNeqVRjXdqWn",
  "key21": "5hsxGga3BfQAZYjv8wMZvKba2YinotMEFZZvssNePNGzboHcT9ztXNuvi6wCHuzWeKvJ7pxPj461Hfaw6CD49Eiw",
  "key22": "5MtXyCFH2TMXCdPShENgMJ1z6jwDRp5PVkssrEiuxHEMBKAsc4pYMdBH2pV3DKBrjGj97cRuuC5REpjt7QapT9ot",
  "key23": "2wqLWHxr4fLekKn7QpVufZEUMkPdnXmvdULamsfWGY3y3nkx9juVt8U8TXxmEaHiTvs5dqSDbb6KfyvxL6Kgsggu",
  "key24": "5jA8UMECk1YPubj3ob6FGcTKBdDmq13U2PiYbKMPhMfQSwENasLDKXcKVYaYMo6Rb85ZQPnahevTrFi23GKTDv3B",
  "key25": "4dkmbfpXSVsBm5oKq7sKw5qufGQQPoFS1S4yQjkZNtHPBagfijVtsabTojPmX46T4nQ3chMrCPkXEG5yTobWkLx5",
  "key26": "4ABHhSLsjZ2BMLYCpPwusmpfW3CkrGcRc3ZgPvvdkv9nbFMMJfMLrRssUaMNfttCKzznkFoMbp3X1UdcF2iFXSVq",
  "key27": "5CGarriBZZurG5C6g1khZi2VtzcCpEPMykFXmSDuVJSG985UHnjwurhUrCzTTneHNXryFzBvDqKN4z7nKjt5pZnh",
  "key28": "32gEsf415pTx1XLQo8We7PgZynbiKwo9RcUcpgxPJxa3JxQJts4LxDk8GuPVRFyT1dfku5Ghqc4JyCVUh1jeKpZN",
  "key29": "2SSSN3inwQrAQefhvJ2PkVvzHL1F8GusZMSwEZp5eqoByoxtyZgkF3YKRFk9RZjCuvTGC3Kof1JZjFMjTGJNbsJy",
  "key30": "F8LqrJTN6WE7QxHcsoZKZ6mqbjUr4CPHmSXFzYHJNmhifpP1mvVy7zUHateJ6vuVSHRGMcdjhv7kL526gyhH4Sk"
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
