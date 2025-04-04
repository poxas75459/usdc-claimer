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
    "dcosrXaLLskX6TQ5KBKEFRMuPq2NZZr4Tzq55mDhhvzEZkLZNqu92Zz17bgPXNfgtB47DZ8tUZpk1Uw5WBfsenj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24APvLiXwMVQrcLvdfUaxhkyunidNLmPPHpSUWuNc64BqRJaU36uDpksGQeKHNb6j7UfjiZV6uD9z6gEtUCB4Z7o",
  "key1": "5iuL8qfEXcxzttexxSvFxrfcJvrzuDfxXrpjJDdSfKuJVSaNE6mcXMbG3V3qB9tuLE19u3DYxxfcpyhkaSndSJL5",
  "key2": "5UraxwGkXxg713U7nXfMao8tfGiikCmVF8YxhEbMuU7us42VTyeT4YNyTt8tCN71MhBmom7cMkBp4pivuaKNTwD2",
  "key3": "2c6WDJ97pTPY98nSUn2g2WQzTMHqMBcXjXh8ZPUiCkW9WbdPNEX93Wh9reBQ4re1M827MS1XC6vNkPDQ12K85T22",
  "key4": "48cb3C2vcBZghbjykgg9pxuLsWpRPWgG4ptfKq4ExpBE1EJvVonWo8JC3ZtvxfjhLaFSmDGZ195yo5cPxFVeAicg",
  "key5": "34QELocCyUjmnqkqmvienuwu2xu8Zw1AU1TgZm57ViYaZ1vwipvBQjtzeWJ1RCpW8JwtR82TczfayFyeatMB6EsS",
  "key6": "4QUsmSw5eGjN75WDrN5XibdQ6EHqqYS8obk6y8iGonxoZsr8GYy7zchJrP6CZJYkHUqtn3BVHx7mHt7axG4Q6zXS",
  "key7": "5Npdv9jzfAoKA5SW8unkw6cZvjguBwRhmfbGvfsJNQ3W64RCauhb8cb47zFACh1cdsKG1vrVASuzuGPgHRuoLAsL",
  "key8": "67BUVPbS258dtojxeoF29hqYF4rtxtcPgFbNJewWgMrtj3wQ2DBqTn77mNQV5sjekgJ5m24oie2bConz2VSQ8B7K",
  "key9": "2e9GoZZTPiAabuoUsVY9xndWwo3Cq7HnDC6f8REWr5upDnfb4sdhpV7YxUWGBigA95HCjjkrRv187CGQWGkxturE",
  "key10": "3B1YhC1R52JMc8QaXnt4hSKxSnyhqWXCUxbypmZ1551V8ubBH2YzMG8vtmhGrgJT8BTzQkhGCtvZgZvtNsdKZVqn",
  "key11": "2PrL8jj5ykTKQyMTLCRbBG195eeeppFUZ59fXukSVP5wKiEk4mvLHJTAmk2Np36sKj6HB7af8W9Rv5XB54tQ1ixg",
  "key12": "2bZHBsjB15PY5ahpMitLYh1wBZZFCRDtsVfcMAteSbwEK2qqV3vNgE5zPUBbtx8zf7cBY4aSw6KkUo1fzWhUU4CN",
  "key13": "4cf4kBxN9J1eGPUKustvDdNtZKrv2Dstm6ePcEfsVNFpq3fTYuX6V9QGA1TfPLxnUhaVRzuceSAegSGU25sxAVM4",
  "key14": "3bDjdFRyLXZGo1qAext9UfGCH6SZdv8wMFNxPPkJuFM1XWpEdrvMcMggz2A92gVfnD727NCiXindau9qs1qtk4RU",
  "key15": "3Nq2JNSG7AAyizpJ8yER591EHnDeMLV68AeWwMbwLo9MakToW29h3UbDH41NCEzBzNVBkRsyNtucxXMVG1PqKzN",
  "key16": "Q91ZPgJ34rexUHHR5saYUrvsccCsBDfEBtCvCkPj5jpD7smXhobCiJn1V4hxv8CZrJgzXtWWDk9LvcNG2d4tNQJ",
  "key17": "4yu4hTj9XtyovFXFxx6o9fHEwS72gEcy5iGMSUbHgeteFVNa424S7RFPrpFwvusMNcVv5S9t38Emt7cuBjWeMLeP",
  "key18": "hd2FAArauYRkvyw7wBbUQY4QeT3P8dXTsR3gp3fsBg1WG1JGNziEpdfNdtnyv5K4tPUrXXH5HHUMfF1vfnJtsQw",
  "key19": "Yh3MvKy8ntJTEGatq6SdH5gSHzfiQqHgVpQymyHSQbBEoQXYDaJi4oC99T6tB6WXjhmDJtDTE6UPZzWRy1k18RC",
  "key20": "4cWsAYZkqB6vtfer963HdB3rmkvyfma9A1sv6ebA3aSAZcvEBhjzjfbRbqiXtnWFBh4KPF1HKcyUNuSFR4Un8e6q",
  "key21": "Xhq79d7yBnuXcpcCN1E4DLBkrCSd2eiFvVnQ4GacuiMPZRmd9e5UPCaAxKDebnbutSUxhPQU9QRVviTkVYW4XjL",
  "key22": "5ahA6EWnbSVDsEaTXNqGshZ96ncsK7PfW5PYhKMDWMFiuYsRBJP8f37hYRfmKDd5NYVYyAiaidMRn4ciKLotPKRH",
  "key23": "63vdARanAYqbaTMDnENxQi8rmcfkD4kb4BV7mm9EH67Lk2Z4yMiTVGANKrjKBQvvSYvuBV92dRbTuoij4uDyuuQM",
  "key24": "3VkrhGVC3asES6pMjNAB28TXFc6WokW6qcaXYpp42PEnyj4BEKDTRq7vjqRp2TqZJ848aSy7d7MqMuRmHdPwXX97",
  "key25": "4x1KDFLuEGUZe13swpX5URAnHokqiTikjr8vpFhCtP3Q9XDQKc8gk7xWFLQpkqNCHWcFvqaKbkq3phor6MXZgcPr",
  "key26": "HoDDBf6ZQYAC8HDsbswsncdJCUGqBsoE3ecX4NDhgSvURmTA73LaFv3dK7sAm8rs85r394fhHWPpQgaqprK5mc1"
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
