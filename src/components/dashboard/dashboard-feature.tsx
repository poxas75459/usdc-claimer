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
    "52CLttKmz4BAxZWiAqADSifazCNLr9uEtJfZu8ShbMZKLfL3JLSwhv421XC7MuviczexVCdg4r5wLAw8D49g3ESt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GmwMbSG9J83gbx3HnKy2HCAD6TVi953DXSdAEynMybSFMRPi24p8KmyVyr3BqN8RKCYqW3jM2shnXnwww1TZ5ez",
  "key1": "4FMAxLaW7wJskNKBz1JfKizm9YCRzt1AedqQFJm41H55Er15KB4QKAPC9b2AhkLbuZEkZyYTzjRmvfZb2MCECazf",
  "key2": "3EiNzo6eAjDXZ1EV3hnhN2zMKbE9KfnBLr9Ykz6396nd3mv8RZUqehWeGxxjoUoyFhKeeG5AyS2ScKGy2Ch9HwhF",
  "key3": "3LzuWh4UUmwoYxB8HuL2qKJNxKR125oBCv4rjRwGs6n8bAhuwUWDEkBGAwGN2EBKtxHjSTieQkKKjbiHHuXKW3Mv",
  "key4": "iMFmcQxE7uvCfh6GGBmDLWPEKAiYJuTLFH3qapaWZVeQiz5z9aJGKD3v2L8H5q5T2WUpGqup2kstkBGFUsjKvbJ",
  "key5": "2CqvQF1ySSuM1FR37mbHVNE59QrDdHkUoWb7s6xuNPiz7SqLYxjwUNVmjAtjmSBwWLeMDmnHkfPMk3FKLvaNKtNc",
  "key6": "65FgRzUSSp4X6uo69Rg1WKe9Zk1E7vtaXZydvt14GgUTjuz8Y9KSooeuLgKZau9ZGYvjf5u8ShfCgwX6GHKT6xk8",
  "key7": "24qTC7KDfFy8zGQRCofNqnV5cdiTgRVCN3jmmYiM5XMtQxq4Uv4C9bWu55yVc5tm4UhUMAZnhNkDdQjBnmYFzYr5",
  "key8": "4gXmVNY5MLLUug2XvCckfZD9fgDMfa3WKCGqUaSPLsYnCEEkkjDAezNVMdo8Fc7ARkdpL1EGoeTA9mfcKAAKLAde",
  "key9": "vYhPVP2B6kUiwmz9kju31SpGSubQNpt2szpZsDuoGC2f6PXgJLcTeWxLt8bV7yDKHrb8AHRsu1akT2prkqGLNJ8",
  "key10": "28fqYazz3n3c1GVNxCoUG5JPEfhXquuCP3554G4DYaHc9MkXpQcQYb5LZ5jUtBD8bTdoco7N1w4K72Sytpe7pFyn",
  "key11": "DkHYWSW77zfjuEouYheyCr2cri5SkpPmdLRzkmhbeo2BGwA4A2z9n8SMYi2szo7Ube2dkf6zvZS8n2A7n8VMWxq",
  "key12": "Pdd8iu84A4VPZi9vXRbAyVmqEAhGqpQrEKEayLawVA13fq42HKSYVY9xNG18iXrU6wMpuXAbEbCSfzpEij4p31v",
  "key13": "3fUvyEb9JFXbB2S7TSp5HmaXLSavY93NgqrdgPyKWGYrigpJCs5ZyZXHtzzD74z3ga7DWw2V9XbowVqvVZHiNKiP",
  "key14": "25B4fJDNx6NF3zyJRQtMpTkCcmmv2532JSbb1yS4p8n5AX57bNnWQzgybjKv5iFqYWGsvw8DpY4e5fRBemtRytK5",
  "key15": "2yhvbfRAqJ1DrSZMaNH5AN6iE4RCTL4FmwyxRAnvpZtqMSaSGR2fyxi9AoYG8mBSU4YfDAyzq8psUFGDL3BDaMpC",
  "key16": "4niWPK1zMJ9hmqKtiYUqrXWeaAwbFAPkWzurgH9WzzK4E8XvYrs3CCNi3pTh36bunVVXsjyeEbwBS9zokLsmAfuJ",
  "key17": "5W3XRTozR7tmrfHjKwFZyBsMhKDPFyaNXa38FCFZKhJeFKQRi3giE7frqiZHD3gymvBcL9md4DB7HhodxXGLnQrq",
  "key18": "Rut8gdP7QcyfuGoEGH7pMZrP1qqmN4attdpzTTMTBZDxKqAabEuKkLQKt2C5xDwFypCehF9s1BK1nMGY22UF2tt",
  "key19": "41jfTXR2JbDcan891MVZ1F4xDdhVXWWSW4BQix2igmLQoG6rGizA9JP8yArWt2eXAFCc94wEh9LK2C58tWxqKDHx",
  "key20": "3RR7nQQmQhMedTKpoq1UGJRrEr9T4e7DvxtnWUZcdDsDKHZ2Xi4FcFpD1bc21g6YcBcnuqBtLVyQt4yYkWDk2DcD",
  "key21": "3ZRJxyNFpBz64qDsDSU6CZ7MRcv9mmdh1jU6piS18rWW2BoFY16CTjHp3ej1475xjiLfGFsTNZ2FNxGvd46qNoxy",
  "key22": "5EMwosL5r64VPHoE1AFZqdEpnDW9FkGufS2U9MNtmNHdF8kep5z6iYsp7qugM3AoAUzfVTG3tAXrEJUVLmGrdZwr",
  "key23": "3ymZWi1DJjMgHzK3Kf55FfwCEA6VfEdPYYyW8wd41L85ksbp4JYnG12DynTqEnkRAFshv2ThB6pVmMsUt49Gd9Vp",
  "key24": "RPRM6ffwCmDW1PzLmrsf8DXHfW9hvQRZH7tYA7YyQLnmXVuwAkc2hDrRqq52ZT9NmabrNvH3TWK5n8QpVWicEFc",
  "key25": "634rdfXMRfZsGjdWTVFZDFSFQcCrdXme3YetRNz28cW9R1puXBwpwXYsiUb7xmj5sAfNbV8DDXk1Y1waMisK79X6",
  "key26": "5hnnirkmL5kZQht8Tne8QTMjvXQ14DiGCPD4eW7Nyzk46jxy7gPJR8MkN1Ybnzo4MbyU5QyoQ7PghsnPcSDz93dK",
  "key27": "4XdTMWTpEEc3aRq6EPb8BvvXEWSuBdy46UxgePgFkYRPK5whLxAqXXB4GsjT5BKsLhHL9wy5mkYkXUeTotgfbZ3g",
  "key28": "4Cp388sET79nVeo3bexxGbN2UGme7V772SaYX2wxpg3iK244bcgpQkcwVt2CksyDDtggeUvdbx9sDyxoVs11Hfs4",
  "key29": "FSqrDeEtYJkaj7LbVLFCqCGrPJJGjBNdikrhtsZn5Hr5vGrHouDQP1myHHTQLtzwPiE15DRvDb4APSJe98T7tEe",
  "key30": "228tG3CJHH8w33h1G4JnAiYr3eigDSberXxZxGRHM9MZSkau2bPoq9s4V3uuQYXjJ72xkaPgfQXyTue7xna7BenP",
  "key31": "brNZoVYa2YpdVpct4VASBjstBNZofZVaxXK7orWmpHYVgxrJLbdL1Bt14DqD7gkN29sjqfpwWUi3Qw9p88FEoff"
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
