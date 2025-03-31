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
    "51724d8FibzHzEX4Sm1fgCvhuzjJWmcfYSXDdKpe53M1pMBwZrMD2kzJABtfa6KhfDRDY26ckQrB1Lxz4YcpEKfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21bxzzFTCh9338WzCc2GX9oojRArtmKcMsZ2dz9KqjioqrNDJRwGFYJcKhKeUoeLyXb2sggLJ6ujmzaLsUbKHZsA",
  "key1": "azpnz4GMz4uy9WL77Rgz2ALEbiUACUPhQxMruH8J8DzRgZMiJ4cX4jCdVVjSmXcS4XF4TuETaFZvXd6E6u8GpuZ",
  "key2": "yobpfyHn3VsAY3NXE6rccEpZZnsCpkhsqrrQ1iPMg71AoggfhPMT8kYK93fKYwvYmbvLqKu1UTjGoXaGwKfbLLM",
  "key3": "61Qefk1gq2pgwVbY7GoWtot6736ysoVaTour5o7J5B8eCeqVvru4WEkTN5JtCmCB2WYCFx23VF4eqdTLhz7N6RDW",
  "key4": "5zjd6N96cTkzMSJv7FyBLAsAWPEvQ8WgcGu3D2vrLxqmspvg5E21ZPacH5yyiYxvyH3XjNFgDEQF2uBPqng9Y6zg",
  "key5": "55DZRhwvV5m1fFQf2vUXXfFGMPV9ntUquhc74UZtF751r4sZzuzuwDrcT43VLvGKr7TeTAVgh2BfeAoGLtQ65C3g",
  "key6": "cwpX66Ly25Kk5WLTPabwxUSTcqvCnzsJwWdBsankhbpqU3mwDju6uAEKuKQJBcb2mBDao2KKDLL3zJ79YXKhNYh",
  "key7": "zaue4PD72z5tGXhTCS9nsxVALECZUBqCfJjhhyR3PyvnBoC9pzQeUAsmXkZJzLFJzMx3PhGjxDd4rf56wxSguXL",
  "key8": "2S1Z9QFd5hwAFM4qo5w3TmE6GXQiq53M5tvaQa66QdupCdDofFkTKvcZpHFkMjvv4wSrN8QKchsibP7gKv6mAarW",
  "key9": "4SbKrbv25qpRi5oCeo47EjqtxYeFry6Dq7n1bE7g9FBMq9zX2sg4Gj1JQnYwW8NwjafWoeFAnLfCHkiF9AkBgSeY",
  "key10": "26RkD8j86dVvmmySRfGq2NGeyL2nYp2jScjQ1hewPgykpQ7XafareRN8XC42u1qJxxVpShJ1snSn79MRzUKBH5SX",
  "key11": "2YaC693ZDN4T4BUccA7eaHXrwGg91g8BYmSFg8fjMR2Dtv31fMLebkBkmn4x1u3JU2oG4c2eUwEnmJYtLLYgVhRo",
  "key12": "LtA6KzLHVFPVLt2TiR18uwa3VxYMuxGoDzGWF7F7xpXrzmg2BqCTXwgbufRN8WXGj5z24rrR6ttWrQULVjBVf28",
  "key13": "TmgxVD7tfqmrFKfMM2KamHWRJ1bmnoq2VnEEJtB2mXknBYJTVKADrtniSUmeebNQCTHKcspBH89BrFnba7zGAwy",
  "key14": "5hk5vdxDJoCUPyMNQHJm7zY7HpxMP19qspvtdgGJCEfqzdicb2QDxgUbpvPTxyiYoQCQPAAgibf2riNsNpgQSDe3",
  "key15": "2vErAZaWHvg1aKVEuRZW7aMBkd4d9PaXU78PeUbV9FBwdhEdZ5yn6wD8qjqL1f3i879oXr6ut17hzAN3LgpnkTzX",
  "key16": "A1JVV6g3SbcZnexYQJsFa1iojeVYrxstaqASkX7tCy9Yhp383TX1wspHKRM471FALYTJA8vUNbE7mmt6XeorQKi",
  "key17": "5dcQawf2gVYicTw1X3bdHrWDVYmQWaTpPkrnG894XquE3PkszmsDgV67zB77JVGioweci6Z2PaYMRQ5fR9nbHwmB",
  "key18": "4AK6pFLGT8TQ56ohKVhn1xDk5tdFRGJYbbjTvbRh3MCoWZ3JVTAfJAqdQRcVtnw9TUVVqCC4fvUhebKkL7c3pR78",
  "key19": "2mAXVuCaxejiHN1Vx985ajhwL56xRjw6BXuhfeVMRQ35PrTg3U8wZJa9RfgCd3FD4DKSMeAL9mjghcruhH9ZPWdH",
  "key20": "29vvtxH2f1aAL13EhV5DDbNpYzMVcSUyt82XbHSikVC3ciBAhwjgdVYGvPynUHcUXR9WpSiA7Wf1sHi35YpHFRRB",
  "key21": "4EHm33bRpEHw5axjyW2ZeQQ9qqkCY6oV46J8vvKMq4q4CqWhkXgtQb1y86f8GiPTWh3KWy833KwpgHXrvxBwBsfo",
  "key22": "qSStf2nQEmVSinLUXb8bNfMLSLCTUmnCjfL4UqXUwX5qHJRsRSkbyZSLumyajj1rcSH4mz7YwDbsBzPEBqxCZjH",
  "key23": "5LrDxDHh3jLJtJgCCtYfFXcQr5Dt6fyRAiffwHjtZ5Wsiku9v1QoAxKUBvUExRbb9XBJ6VRg97LcFE3yKwAiX2vv",
  "key24": "6LtddVHhciBZuAw81GwQSTaZCGp2tQYtRmN2aZYnSDT5o5Aue6XRNGZewWrgv9M3fQcx73UQfiYAW4QbJeeMNTC",
  "key25": "5zSH8DkNdA8yMm73g9NT3JjoCEifXwAk4G363ohu2we6YjsQbBPAJ8wG6nMAP1634g3qzQnpfuqaXcBCWM1vcxMm"
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
