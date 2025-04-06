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
    "56mQFXzQBNWbYreUKL5sAoCHWcchePpkpVSLpEsrJkYWDYx55qsZUrkvX6w1RFwAGssw2S9ov5U5bh4CU7yZj3Aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QGnNfZXzMAhMxKk8jytBUdjNrh5TbdFK1x8zXrL9AZepR3S9haUnb3F9uS49hAh2XDCf2JDcgJu7u1fNVyk1vjM",
  "key1": "3eKwhu5W9ZKXsqo5AaYxNBnWe7ehfZeR5f9PbsR8LdMyrNBYFjcZZdVN3YtQhubj1yutz2cc7EACBAbKSATJpVxa",
  "key2": "kXTFCqoBqGe8whaNxT57wCFjsYAB5Lbq4zmjVVMknrRhjWKAotW1E9PuaqobAsw36X4fjapHznZsV3PQxG8cfm9",
  "key3": "3aPJR7BM8B2vFfwrkC1CRicFDGiaeYjqCZwqnNkNxeHmkDq95yudQcizWY2ttSr4iq7mYKEvzdTZ5DiGkW93Uf8R",
  "key4": "hwgrzmVvrXhjdFdpE1ASxetLrkvCJT9zMDYYFYaBpV7umeHpyWfTgC7tCXE77C6wRaoj4hzuUQJCo24bG6Um73i",
  "key5": "4jp6urFFmMYUfVqBCbqwmA52y3qT65eLds9umxTBTu1Ha544huFx8CNixxKShXimizacKv5JTaymj6X6UFgiZqWc",
  "key6": "5qud8cKbU1szhZD21kA2M471eFq914wXWojr2EWWV3m3AYs6PyZemomgqh3K1oA58L6xcWvZnWPNvhhN6Ujn5sJQ",
  "key7": "5h15DfKWK8YmR4WDE7mKeUCxzAsQC93bKXJQuudHEqbH9YcK6jYdoV2tnWTjgjphcrfyTkiBmskLtELwFULf2avo",
  "key8": "3L2c3J7HU3N7bUrjEV1DscVrCi2NVCYR8esqD4wmbxCFppzhBwYWMRr5LEXVtwGNHZiCKYzQHYEPs8iDumqNitP7",
  "key9": "63WkfEdFTjCLLaspEhw2TxL4wDx2CvQeqx9vwkp3FxSaCn549wja2Wn5cSe44koHfDuz8LH9XJXQZsz3TuroE3jR",
  "key10": "2DBXsYPkJYhU6nSppCwgp7KNaYeh1dRx4gAL6EGQPY131PNrUkFUuqkhzWKLLEQ89LadFd9WYcsfvzh2Q7QCWLvY",
  "key11": "YZD9QzUyWei2bGPLGvQjDzMZ44nhoyhAs54ic163My5mgFUL76ktqiR381Xxaj7QrMCxf1PD5Qya8tN93C8Q1Pu",
  "key12": "g9RygiRa11eDW2uzxigZLXDHTv5JYAWee6NjkJVnuu1xHa6kgpk3pk22aWdNyEztfMUeGVWFeTapLfEzUtjPBtq",
  "key13": "39jzQ4SmakeRKRoSUmYCNgMFmsp1BeTvm5kVasrJT3NtjWjx7jS4K6w2x94Edp7cfmSJ7BpBJDyhJoyiYzYea7XX",
  "key14": "2YozDUohg1VP5XwzPseMr5sGkzCAoZpL6c52xNXRXLnDtUV3pQs4zx5oZUq6B8XZPcxvJSiX39fayCzqnG3fiJos",
  "key15": "53VrYBBpKtPBgVAighWVgb2HocsaXjcXrVsSud3mywdjprGHLfJyLhd4FHvtJNxXsyRLvoq3kHXTbfycVkkqxRCT",
  "key16": "4rabB7cpwymRdszYQTLiGMnL6qrrzZ1rd4q6Bztvgqk41Hft8Au3tfjApViaSzh1rWDtRZhEDg2rjsGQAYYYV2fX",
  "key17": "5s8tAEH89TUYmnKNLimEoWho4Q6pUdGDvAtrkvuwySouR4TDzCzEJKRmidF2zLtQL1AcVnAxi4Wa3ePCAz9x5xvw",
  "key18": "2uzucy1aoJaTx6G3tEYKp7vYKfrxvnjiQ3X5LjcLEGB71TYjyBwX3m1wSaXWcXKz7vN4RkdCKvx7MKDfDhZDdpBc",
  "key19": "5Rix6a8CVRF5weHGT1Tvfwot6zg9A1ycrnQ1dBz6obVvNgSp36c9rt8FE1KxV9idj66TU5xxksT8XFTrEJaqAC1x",
  "key20": "276PpDsHG7UrPV48KMh65qVvEyXSXwJTQimTPX6KefV8Y59xYwPsn8BgM7auwnRYWWPN5dpQrR274qEnXeAUtuRp",
  "key21": "2unX9WiU3jKHJzrGKuS2s3yCxRdEBBB1Jubn7J2Z8zNMQ2topFKgewrjFcigQEcghrZcNTQbTmrfC4FFBgQmBHih",
  "key22": "53PPBMogb9ET2uJ19awySF5JjLw7kyhbHs9eMFSYu2pLf1fAfhAQiVephf9wnfekGWMwXNtvrp4z9coN3acgaZAF",
  "key23": "4hcJ3QZwxsrubWgrW4FfzPqSPaXMXndEf31iiCCn9RFbD55E5sQuBCyYVeziVXB8AV8HE2L2XxF81Ww3TampZoU9",
  "key24": "5tH517FLc2cUq6NnLNFnf3YBgkRJqgMuY23ihhfqGQP5nC6JLiEmgL6syZ1MGyc9ihn4JdWbQyEnoyhNqQZKiFW4",
  "key25": "3haqQy2B2exnZYq6UU5FQ7k3qacrFBc7nWBTCDBK1HwYtpxedNr7Zi9YB3rnxVd8xZsm9UDa5RmsvgQapKxV7kZF",
  "key26": "29NQ18m3vh4sh9UVdqGeKu2p2AAMLZFCsQokb3jTqLoH1gCMxR1QzUMYsPGAFWZb5G3er6Yo865Dho5epHUJZzZ2",
  "key27": "3pUYQf6UJdg4XQFKqn4XEyqZyZFjFxshyMUQxCZNxDdA74BVSLRTkH7mG1AipY9FZW7DgWH9FE4Ftj9fcAaoFicW",
  "key28": "2VYr77qXPeHWxe8VAYZvtn3jWMKRmN8HwVzftfyrEebKtUi3rHY8Zm7dJL7tbRgNnAffDA1uYE7WLxdRNZ9LkFKN",
  "key29": "285GT9UfYAMrUtYetto8s7367xoEj8uKnhXmdqLc3bD6MKDQ2EYNT3kXicGiRCvGthouqhSjbsL49dTVZdiavW3D",
  "key30": "3X3DeBqS7UPZhdNqstRs8EM6p6dsDytz1euzmsY4jLFwh2TPKcXdrzAenhuavz9iaL5f5tVr4RcXu3zbVJLRbh4V",
  "key31": "4D46Z27J7dCx3HZ8FMRNn7JuCT2YMWM6J9YzZ6i1uWKSzHn2tDhhuw8FSqEAe41YsVrQdhLvDT1R2F9NhHm8JR7w",
  "key32": "4Tqd7E6khdz51zwQGSbkoRb6QhZH5aSt2ubXTWNYkhHkaVYazMEednDXQuzFSPjNSQEaDbEyVLJhfTAuUFodYkp1",
  "key33": "2EyVCzSqrG6ut2kgj5e6wWwjDfm1GrckCeyybyLSSBvDtgUfxEGvr78rcZKjveyJchyGv4DeQUJU7e7pfysmCNHy",
  "key34": "51NezAFK27QYYA4UgQVWgAWjBT6qAG89aNgVEY9GFN9iCBm3YpSN3xF3pG6VYhWo3pZz1JSbDPAkcGtXbj2EFxhn",
  "key35": "4GYtGmXWbGtPKjLMzubqKvDmFEdUwaYh5aZ8mfLt35nchV6Bt445RRGJP7GGMETrGoCdAWZmhuLpCW8bFJ6eGtKn",
  "key36": "xvV5ydpKjYJdAhx4kx3aKScAqNozK9gPzqYLWLHbvQsdkPDhfu2SeaX4gFugFSb1wisD8bBHgwU1wfFgLzmP626",
  "key37": "CnzSXfUwb3GrFugef2Ztonah4NMgiMp8QyBD5tqVwBgN6PAHRD9bPJcJe1ugcqxG4sYYmsZb7JRSzJvSA8X18jP",
  "key38": "FH5wTVS4872Ur3TcMsU9P2u18WTv6AU7WaAHf1uoR6oibBzbchG8Q5cLhvcvVSkgthto1KoTwYqdzhmVRwsQPMn",
  "key39": "3eRaXhs6gvSv6dnQX4ZFCrq39xbUsT4Y7oL41BvZgMjrRP7n9c2X3JWfZCwQcUvNGbzmT83srAd6tuSZ59HvhkkL",
  "key40": "3L1jfovDSMmzyh1oVsYWN7oaCsn73MFzLtPdPZLwkMERFt26rxrGv4652stmsu2c5VHSic9QY5T9sTfsEUebPQfG"
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
