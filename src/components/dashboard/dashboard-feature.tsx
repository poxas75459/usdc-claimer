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
    "25epFLjyA59rz9m5RoL4PptD8gAeeXeHUuXSryBdnUrQ5FbFBa8ttnQ1P6wyrXJ6zNs9JKk4Fb92qnXqzC2m2fPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tVicjxf3f1e3zeccMY8wqYkiwK25kiJ643Do3e1FR6SU13kmSqytNA8hUUZSAgKjM91uifginEXoqZNGtZKgixC",
  "key1": "5cym3RmHmeBwQ7xuM2afMhQj6vi7L3avwFrCDpqWodvFNg9cn3noD3FabsZK3eBjquB5S5PP9vBQB26crTG5Q7H1",
  "key2": "4Rcvm2xuF1NtkzxCGqWAQJsJGnNvN4PrbBNPeBUD6JBCRseJafWYZM6krXHRmnX9Bzu6xYjfDENivhsqsSqmhEDw",
  "key3": "m1FvzKW9rWjy34KugGdbLW1mJs7n4UjdJgu9NZHTgCoPazdCKc22Xgzzb4jFBg3nv2b2eav2uPmkeTohMG73BMt",
  "key4": "3wfvzE4QnG86ibs6nDv4UsULvD8bdY1DBAEwfTFuGbU9nfDGiNtmmLCquPg8ZPiVRXFoxCEXFwhSuyyLi2kERtJ5",
  "key5": "4aVBgdskGBLiA4bXvK7LfwFs39FjW1FRj7TCroEJmkbx2pPU318FcdV3xEZzLe6UkK4iKbGrGQdJZxv67YUeEQBA",
  "key6": "mAAb1roxMPxUcXD5Lr7qQCpjc4T5RCyoAUJAWPpGvPyiA7r532YowAXyeREEMD6csewrAEKTHAv96hgnQXJBNoh",
  "key7": "4HAFS79MUCF2MG9UwokhDFP1GSEWAoRbJ8s7rjserAyVaU54ntbwZpyRgdJL76L3TbdBGkGq5voMf9ceHKiK7RUh",
  "key8": "2PFxVn2VwGLzZNb8XKAe6qy47ETampeRMnLhENiZyRQevSuGongSCeuq3LZVXGeo7EbDdYuRriyCnqQoZocDGPd8",
  "key9": "3maQnJLzsMwYPnmWjsR5ttCkHLS2wNM2H8Vt9wTFN5iyW6nyG7ixYiXczAs4SG2HatUcaoqexNUvZkEwDhcxA1sv",
  "key10": "3UsyjidJVYTuqECqoL5RbJSExShZEPAAZ15ozsS3fGnWGpvGyRwPn4Tc2iEC6cZ51eEnghCgwcELvxteR79VkoCm",
  "key11": "2PbqBU6enBB9KkmjP1ywhGcCv7B31JYP6nscJG5432E896zy6eyaDZHjSb1c2WxrkDqmo5CXWHgQFsWyPmN3mCZX",
  "key12": "nq7vAZqd6tTniZp5fSHRDpg4Hur14zrgBaGeu7a6TiTDP3hyYs5976BAX72PDFzvEXbdqEczdeJQ2KUtqmdPCJU",
  "key13": "UWXYT5pkXsbpuEe8i91Dk8w6xfxbwwmvnrR9je5Z9jjpJDoyffwG4pNSTxSsT2MeDoB4xcdjhUadi14TNcJqJSy",
  "key14": "2vmwWrsb9ZUUWio1zpwMxQrrC7RwnJWPhutxofhAj7fZaFAJqf1tShC3T62usMgYUrrJfJLLprR26GfspvaujLGk",
  "key15": "5fhiYanznKF1dqE4JYmPESfA6vNTir627rCy5mncjJkGLuMk7gSMzFMTrwY18WLxGV5BXPPS8kLE1CAuwNTLu6zG",
  "key16": "3bxU8wdCLMqKtidkAeMYfm6b2erHWJujcSA7Yvexq1gcM7LGetKSKpTyzvDjV1FhLmZkeTsJQMpW67vbyuMFhRzm",
  "key17": "hW6Hdcp4U3Y8hfoQPtWjX5DM72n4NpWdcDpjT1MqTXH9avkEokhfUV8rkNTpUaUhWKneiznV7BRJ22AxfWBFfQt",
  "key18": "4QLfnuaHaMiXKwow7dY5tig9ff4VDprjezd72U68b438mAmB7ZSjWcY9AbGYGmiWU9aXs6aadQY53qhSLiHWah4T",
  "key19": "2GeWYSdVRBufkBwKbrYi2FC4shShANYidq1JZzFZRtfanqjyqAbb93uBXsPpWAzk94TnUTSWRk4RmyZrP5qZLySX",
  "key20": "32o3gbhsTMFGBX9SHaTTew9KD1kPXB4uMqmuCcQnz5fCkJZKfb8TtiNGGPmDmhoF9R2pp8gBySStVprZaAeB8vXf",
  "key21": "JF7gLY6QSHGQgqBJnpLiydH4EoSiYCBjPzvDG7vXPB9UUVJGK7zm3QmSFZC7Kdmv7zcTBAN4MttReKT6TpM81f2",
  "key22": "fCfSTtfwBujdysQy6Ew5vCx8in57seT2BV3quxiW7J3Pbu5pVVKrzMh6hxVcZ1RoQCBZCwb4EVER63e6xpZMLau",
  "key23": "S6yeXhmAL6jKor4dE7yo27VGj5H7uQuHhc8LEsW5m9vBNervFtWtQyPqvMcrjQdSUPVdZtWwvSMaj3ywQ5b98gH",
  "key24": "AhkqB7ypLtj5gz41Kd2s6DgftqNxCEpb2v3BgvruCo26kKW7LrjP5tCy6VbRV5nRtZvwuJ1qmbjSRjW2vQhVAdM",
  "key25": "4kCv6aY1JvJkgerCDFngEet7u8cRitC8MCeyrVRFzeGVBSMoWEdYtM56utB5yjH4AwaF5fNAPpbG5nXg17NZ2Yc5",
  "key26": "4ygqHHGos4rKMRjNN8c9g5Ue65nhkVtvB1StBpSXxazS982MyJ1SzYmWCqZUbzTaUnoSSHxyZRAo75H7R4uaTrAr",
  "key27": "587b7Mmb2f2cp5Fkwp7BZ17DqrfHvKmPiQKPn9DFskzUNmUvAAyumik3ZQzjtWiW4J9tc2prJRKYGcChVEtrqLUU",
  "key28": "qVHr9nSC3McJdH42hZq6EYwm6x9fEjAhtGDAHwAMkLGvyioSVj414GcggM2xBTjR5JXW26RvEDahAYQmCL61BbQ",
  "key29": "4792eJBETnfKdFDdegnC5PCBpTQ1kxMpRdRXVPBgnjzQokDEsXboyEbfZYWFE9crxCVXbBm4D6VAwbLuZ9t6qrT6",
  "key30": "25DS8QbNJ6pbJg6uRPXFgPVGgjbgYjfpwBPf4CVmonxVsDGAGdepc1R7Vu4sEPsS2sjBngx22DFqFqUKWHV5JfsG",
  "key31": "2DzKtLpVKT6CwvDKwarpqr9CUKXKrKugPM1crKDURp4y6HVDfeWXbbpkRK3S6iTYHnYbEfT2C6p8t7Pu2UzAQDNK",
  "key32": "5hkWiULbrP2rVraZLgmt5kZcPtqrWV6D8mxuRLjbNs5nHSKVaai2Twh2ZZi2bppgzHVBMpPNjCSQxuLT4qbN8MYw",
  "key33": "3v94gJB6PRfZznQJg7CZ8HTeA64iLcHQg5jjsbag2fznKM3DfEXB1ZBdjHuQbSoHT25XxZs2Ae9KoVz9QqQneNZP",
  "key34": "dytnyshsAK3Qu9kBTh6F7oi9nK7qQzsf2ynUC6n1XgxjBeJweZYrgrwLPyPYVJgkB2QKV4zCtQorVmk4mmgsNXp",
  "key35": "2RRCQxwmGtySFMztrc5214aSn86StSGKRVGJEK98JWbzA3HyaojUUkPBZwXwVikQrHEukbmPZSKb5iwGA7kCCKya",
  "key36": "24iodDuACrEfs13mbPGLcXvMnM9s82jxNGw9E6P5CqNBW7XPGNxaToiXfzYgX85PDA4BiGd4SyxA2gwQicC54Cro"
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
