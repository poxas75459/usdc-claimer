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
    "45CLG4PAmMYmgraWCSAwRCicPu8ep72Yb4TzVChJEABQXbETwiTEYbWS18q6LQ5jwqcApJztv6YEni7W1vJ9dNza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jmWurDi16rvj5r1oL1ujFYnfoPSMpJeacJsCtTssbeBnrUhJYGXz4jcqmTunht523otbxcBuJUpkk3bGWDEbyMY",
  "key1": "5S63iwJBRft3DtY2cBtYuHKV22q8RCA4LMqXtbafPB3cW1sCaov6bbJvwYNAF98vmmRW3V56kzuiGAM4d1YopXb7",
  "key2": "Vw2yvv6yZ8MQEQfCdRxb1pgizXvvUsxSuhAPR9yY55sXnmYMTp1U35GgtCj8rzrkARHeFdu91tx16T42eYnnPsv",
  "key3": "d9Cr5veEdY5WeU6ajZf9RuZ94gf5H9buMgUUuh8KxJp1gJDmNtp2eyhqjWSqvfi1sNQpkNqPsodo3mCe1hkbGqi",
  "key4": "5Fdyfgv6uWGZzeC7nrRYUiUdpWAdWhtTZhxE8u42L8S31DYaaXYBY6gbTW7PvKLt3h9QgXyXauQ9T2uzyoufgxwA",
  "key5": "n4QFacfgo5T8DVVvr1YdaWaSPVY76k87HtpkVKBZ45eKM6uuLNX2wKPiHPyz6tnwqzgoNDPEAzJXteF7A8sCLEL",
  "key6": "2zwqD5mkaCAYLSZdtWcqy7Pnv6kXmCqZREZoZksk2ZHmYnPGLVgx6e5CFLgPNx3SpsPfxu3sx5byaSijeDLufE7i",
  "key7": "Jv2wpgM5scXUZ2S3QuteuNAvKneiZAFHL7bocu8GGcmqqqo3bC4EC9VGxoFd1XLuVesoxGi8BM8oes6bbsRLxAU",
  "key8": "cAbH1q3NUiH3rqxJ9VfMC6NyyKpB6dmaRXxfFFWnhRgtWVLV1TWFqFtXjfGDxvsyxavnWHxPn2CDpd99fDpqHz7",
  "key9": "5xhudqw76D1ZPTaYaXo6DKVcaysNkSLcNZAVb173PaEA9yvm6UhRU3JsyCU4TNzeqfWevqk93LvpggTVGK4UjFXC",
  "key10": "2t6ZiU77wyqCBwq9dvtj21jTKdEgC16VRZ6ZA9bPBCb5r57PKWw9jAtkZ2WnVgg9sXs4B6GYLSizdCiHETxHwciS",
  "key11": "2xJ1JnYzdEjMQzzxG1XMowv37ex5aN5Do1oKcZ1VaqeGCgJZe2kCYnGxedfuy6bvd9GMmJXqUhrg6DTZ8ac4sTxa",
  "key12": "mv6uMr1wH4rgBhbNyY1Ziwi9ZMWMCts6Nsca2BfnrkkcbYJNVyr5LnahY5MNsbVqwLKyemjPQsyyQg2WdXCroWQ",
  "key13": "4JkLNUFFUJaNkgyiqjB4vsfXa2bz9bxASrUQzCccwx5NV42d5NbosA3ConT4HoCRNwfrRmGDqszi6y8HYSYtdUxv",
  "key14": "45328F2nN3DfrEnYDwiR78ydziiSuyYoPj3Gt7UkXy2LfHCKdPUnYsUQEqizWV4x6HDP67o9VpGAkDL9GH53CaDM",
  "key15": "3WCYUejPjT2Yz24wZJtthwEUJN7nMkYRknSjLv1nNgcbUCP8wBxGiuhyuEtuXtWumGDt3chFCM9mExii8m6ao3dr",
  "key16": "5MgfpFKAA9PohJkRmc67pHkRMHizgAKtjkv82md7Wj5ebx2jD7Fy9myvp1MHzkjvsvsQU9oU8D3uVexccuKH4nYH",
  "key17": "24zbXidfMjxgQSRzDPY5yT4rLw4Pkdyo72GF9FtUDmpGyWgraN5hrXzxJCFrqTEGkurQsPckCEHqM9TT4DW9745x",
  "key18": "zQGHYw6FZ4yCfwNrWo4jo17vXhYq8TgR5FSc5yGQcFkAaHHsmCeKDSvCYovFS3VKegByrxB23aHoYjfkZfxYBQ6",
  "key19": "2Eku1ewiRND8CdkvRPHRj7FZsuPS5MyCgDMFCjaARgup5AR8qxjd8BqEvpTQkGDf24vdMTzKLo574SGmWgtbVeqK",
  "key20": "2bDZuwh74os4jMi3S3p1cX1Ntb5qk1tpaoMxGAj5iS7sVyvVoTjv2B7HP2SnhKaGvwQPBpvqk4V6P2kDPwxkhbAu",
  "key21": "WNoQyXvmhBs6RpxLBsuCZ38ce6qx1QXR2wVxtpp7YkNfHqCURnuKH3BQDJcVYmSArtNG4EAewZij1U1wQXSafP3",
  "key22": "ACvQYz99rWb2CT3i72zzgry6R7K183wFHdPEk2a7ebEMJuVpg2kWCtkWzgRd1ScnEHFUCu8kAYVekHbf2ZW6aVS",
  "key23": "4SKhySBxSvjpXgAagF4vroDMq2qQF4GxUqz92APX9pNFhHS2uNhh4v2S3akKxs6cko62JRcwwGPf52EujwQ9aggL",
  "key24": "27whR5Vv9pmGWFPsZc8kKTx9ho3vBWWpv57MkkDZNeLi53icPzXrE7p1QL3fvYrP4WS9FvcM5zDsrDhRMueTx9G7",
  "key25": "3qv2uA95hWh56sLV2fneS2DmFA1gwq97c98wuD8a3sLRNGrzHKkjJRp7tdaLx5E8zVKYzYRecW7qKZ5YWN4Gj9gx",
  "key26": "gTp7dfRxcU6R2VrpVt4Ez2S6xr6iUNLeKAQDwsrUs7gcdUs6T4tbcRciJmV3tgyePdGkofyorotwyuNjbRVixLo"
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
