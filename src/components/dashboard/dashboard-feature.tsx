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
    "3PL2FFUM7WYox3MXa3rM1oeHMzozMvg4znyGfa6V2x9BcJodaNxqjndjKFJMBupS9kDSBDUjWZWELLwq4erXyNWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kZ4TkN5m6o3Brup9wcvc2gpgb4EsY5b2qBjJ6T9JwiatHQucjafyCwCheaCRu7Qe84ar43MmSWMWumy9Rz6jwam",
  "key1": "32KtUuhuUhZTNU5b3mVsZFr59RCykyjEB7XjC4yxU7SgaA9kdDBGnxZsDFDiVuKodBF5AzttgjCUpXLqhbaeQc4Z",
  "key2": "RHW6qiRfEd4hJnnstCsFm5XENg6HDoRW6r4Afsvud1pzW8wCZq9P4HBMaDspeobu3o9SUT5wP5ACvzz2fyQ2coL",
  "key3": "mTPQd1n6uu9aeWe1Y1YTkjMne4wzyLrJ9Ym8PwUBdRbPWQPxuyKiVYRymBwR6kfttQNkwR22yg5XkJwj2eqfrhE",
  "key4": "GBrz3RpicUuZravYqxY9z1c3b9CUX9tUtJEoAtkyRgiHv296rTHLz66CQ8UZ1ym3qYxu9uKHHJmLXggtJCjidQj",
  "key5": "45GjfveUGPL3eTzwa9wGNbtZTvKU3L84LDXkqmPpyMYp4iheE6JzbWtqZqvTS9dUZaCNui2C3RhxuPfM2eySQHdG",
  "key6": "5B2u87KTxeajLBLLNMpQ6iLdYWZwYTsNJzf3N5QLxUWE9Ca6x4xiHYVZLAQoKW8R8HnHLGxZkt1cAqod5NCRsC2s",
  "key7": "2fCpnKjhetrJhJLDjjMo6vBYP7graTkNN8AeSgvKDRFKKBMFnyayCRsFQ4ezftwytYPKih2JpkWgNKbwXzinHt8q",
  "key8": "3hCgsVkFRBh9AvZUZrq1LfkpLaZbykQMfCbHtsMBWQzRhHaxEDKMNkeZtwYcxDGCWemxjkpucvvV1K48KMkHcUfY",
  "key9": "2PH5sG4M1byNKddKYppSYQQ87dqG2qJfxHM6n7bmCW4DoUuXa2Jy9fKsvcvvP5BAvtSWCTNkiY4Fwngv5FeeydLe",
  "key10": "2UyZuNmPfjwcn3aucCDjDaqM15VcWtqa39P8SYm4LmvhCjRBKau2zJ4ouTWoqCUHNiMbb91N3n5FACeahtgCYAn",
  "key11": "oWb99VfWDp9yJrXuAKUc9DoEUryYdK1R8VPG7TfTdZBKn3HcwkhZdTpfPQTVeTZL9L5KbJAA2Lz51h57fnaGEqn",
  "key12": "3gomdihQ3PjV3kJ3gCfU1i8ezNAPBM5iFJjQfy35JaDzinAW2jzbPrwkqscvYYZZyWDkk7pu24Ekmg5UxddP37zZ",
  "key13": "3KXVJvQ5MuTk6ZrEsU2Q2dsNH2QiSU2k8pUE8vXffrsoZHWRCNdPB8VJHrRCxoftFYm73poy6c4kWLHzaQhFCFVr",
  "key14": "3MEhvP6haNhkDfdEGtYakruA1W3yJgcYA1UuCQHZT2ceDbzTZVcg5d7C3ZFB8aqqU7qv3hTSCVTbAk6YsU1shSNR",
  "key15": "YbKueMPrM6nxMiZNvKDox7sssEKsR76pGhii3F2nDc7ikygE2Qr7Ztdj1iG2xVVHLzFUzumjNiExst8Z75CjRvv",
  "key16": "2u5PZkoKifgBfNQNhNd96pzeH7W4hMHX6yrPLKai14JeTNAhGZSHTmPPHqt8wnWE9bWH2oauVYSaUCFF1f36KA25",
  "key17": "yRaMVHprpXV8DkrLboSXqdGzTTzRQZtBeE4ERK9yTXkfo9DsVpmuMfFq71grGStww77qLMRtpcv1T58KuWKx4UY",
  "key18": "4MJtya9X9CJrjsRikyrC75xCqfBrKPGQjmygQMyYCF3KRcATTSco73RKPo8hJqbPTBLfWE89xVKnPurHGHPur7S9",
  "key19": "MW5MVNNGH8aDCqM1fXFXD2LLVFWAWqboK68CUp8CEuErhC29bDM7rQrDNDRGg2CEmcS8L9Vu68s1xASYgnqKi2e",
  "key20": "3wcdMBQEtZEocX5eJ4UYdbbx18CoNjrFbwgFneaGniRY5NBg1ZcCLJtcnNv3eEvcUsttgw9cAvYEQE36kja7tQr5",
  "key21": "3QXfGzVXQePfucrUFFUttFBKftJD9odhbcRf4XL6DepGyoQbzBvvhhV4NrqoU1FABy7YpbN8STDPdifyke87g9Nk",
  "key22": "WpvPjHwJUDpSe83r7xj9pbJApiLJW5LBSrwZrSUZB9zZAB2JKiErJiW5Q8JhumJofgPgbCNnfw8ATD8auaWTB68",
  "key23": "NzWPEEgymdF5GYtCeUbj4jhdkEf1inrAHdS7qQosFwc6Lmmthw9JGfEwkkkmdzxe6s3s9eLv41ibWWKRuqyjrwd",
  "key24": "4WYD5qnUZ3iXj45ojdZarY4HKvRDZHoRJXejS8B1ufKZqgdcswq7XSFJNbmP9W9HniBaCxnb2Kvns3mUSiAPtgzd",
  "key25": "Rn4hPM96xyzMHdCJJY8WDMHw3ocFn8nhkexcyBgWXPNrSLfBQ9UevXXzDDj7mof271Lu33uL2erxnMHurgw6aVv",
  "key26": "zyX6tRkRZN54qeM5AQAfSYqiAMTY4oQXHnJTqb49vFWkxk52b434yeFNyVR9XvmjW4etsXrayn3xKBWuFsHqn8C",
  "key27": "3Wd9Qk8pxkCyzXYaFwqSaBz9xe427YFsJS7LmeF9UWP51Bu4MNw7AuFykjV5ovcqjuQTdn3adqoUmPKcZvynV1au",
  "key28": "5fA1j4k5jr5j9Mx7u1cKUsytQqn24TRKiXAGrgVW3A9NbrXrM5uKzBFjYrU6UbzGq51qNuvjrrtSn1yaPNBAZZc9",
  "key29": "2RgUdSnEBV6B9ebmjxmaPR2gfNsBpHgv2xgHUnBexuzDiumRCvtpPnwS59fzEYFeajKWoTYLcNJNd98MMEogpDDU",
  "key30": "SfPS4hKfEK1dciZvrSwNm6rfREB3kptoNPPFRqzxnp8yHjPht8ZuHFjU8Gq4DXywmjSLzJ6njV2UdgAjtwsPrXT",
  "key31": "sVByjkKbCTGiurmuVbgK5FSjQ6tSfJL8dtvEnbZ946FRAsWwjrAPQd9xZN1CUHmCFU2WfRe5G5gzXD2HPmvmc57",
  "key32": "wS2fCwi1z1wmqz9qfHcMaYLuWj36sPo6aKjP5Rr3X3XugsxyZUFzxrtf43yqMVbUXFCzr5eXtYgUaZh44kRj9fq",
  "key33": "3vsUCvbWpuaawc4KaqvfZ9cDxRMT2swdwr7JpSvs3ff86jV78t5fv9YZG1283bR1fBzBm54g2woDEL9SQ8R6byxp"
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
