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
    "SeeMNc5pLGEug3j76PhSdK44CbNJzyKBgUU8duwur67LBD3PavJXqjbGRok22z72GxSEB6Kfxyr2tU4bBfLegex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xJaDWSMVBq9ePuD6oJ1Nz1GDMWDHfadatQc2Hvq3hunFyF1dduM9uWHJzXndyP2NqiGg8Si8VVKCwnnmB4XtGLY",
  "key1": "4XuXtmJzfyvu6euq9YSQeL7vrG31iniqabCZPnGxEonFgcy6dwdRMFFQ2YUG7otrhymMXX2AaA8q3uE7E1sfhLe2",
  "key2": "2s7KqZ1oPL3LZASCoe3UT7KQsHBLsdpNiTAhhr51rVLH9qy2T2sLrbbe4DtxViSRoWtEZa7QZEuADEPYQZnry6fu",
  "key3": "63a5VsvqFLMwRUCukS4gpy5iWr2BmVXkj5htxxdUw9G5iSUp9jQddCVV5FvtRbsHYqePfKKrnPJD1hArmht3UfFN",
  "key4": "3dn5efcpk5Nsad3mH5yticMMsZY7WjBycJSHRpVrDLvT68v6H8HzL7obZLSWvqsqW35uqMFNcgep6ZYNuovtopr6",
  "key5": "3fczUQGuRa6VmaPA14DJ59K4RTRoPNgdToCgKj5zWhXfHNEqt39utbJKyAmePDQiNK2WfciBmRsxBDWAPcri9grF",
  "key6": "2EMjZu4Gh8s7uBPKhSsMhRX1aYFGQvSrHquoQChAV8KD7k9KnP57BgfCtsKuLvvMfo7QAgwPvnGpsoDKF6X9c8U1",
  "key7": "LYf84EeGGJRYddoCa6JTpchmiPva3BzTcrqreNDipAYCqBwkpFgxVuGQ51VLwHrnsHcfYAgHbkSfnMpE4nfEnqA",
  "key8": "RkWNWMiBCyvRpcv1fYpVNcfEHy9wApBq5ADSBsneLQ79qRrYtYWcftKEFgCHtEk1hn9zJiQjN6iGz4iT6JTHrhg",
  "key9": "34LgdKZdrikrigL3mEiX1KaL3x8d3imeP6t4eiSXHiMQDskD5qoAdZzz3L6cjRFUXZu8QaQqcmLnoPnfSYbU1Ans",
  "key10": "3uyy2VEwiJckaFgqrmRvNp2dbTJJARcer9qR9F4VZbNEWK2SHVhdwbDMRTZ3Dthc9T1BXxXzaKCLqXk9xEGFexuN",
  "key11": "3cUZ6hKH2nWp29s5R5XDi8Qskc879mKPuqP7LVseTDEsqKvu7ecR2xS9exXwYxMN9UYxZ6SLk8eD2R6HheEWeBGg",
  "key12": "494xBupBfe5gakbgQnmnLaMLb1yB95C9yRKvqa7319x3sfX2DmkfSUYN8RFRh3rt9aVoywVgBPX37Zyij2Am7q3m",
  "key13": "N6iwTNXNqD3ufKAJMXeK9xzwBFqT6TGDTvkXezKLjJauipEZr19R7Qfh4H2SFiyvmNLKoRSeB6fkR2aigVEtW9C",
  "key14": "5mAG8i9L7d7Nu67kSbHr9ua51AsMf8aHVZjddASQ9HoLQAkjDdeQ8S6FdZwwLE8UnESA185b3iYaCvkPoX95xCcP",
  "key15": "4Q2eDjoTG1HKjQPDxyXtvW9yEtNACZb663bvqyf52cM19MfKNbjHDt5KSHA7ZphQesyEHTeWzmn4K1RX6jPtcZ2m",
  "key16": "2g5f7Rx2N8KjympEwx1jHqm6oBVnnLMKJDQokfjksi2dCKVoZQgugcUDJzwdYoYRmYMwSYwjRkdnkXNjJHm4JVcK",
  "key17": "2Akcu9MgxSofqvUTuMzk522vzmA5pcePP3KMMBJg4Yp5BPevjDYL5RhDDVV3yTUCiqHECKpkxRBQTGfUBvF62JmA",
  "key18": "ESSbvQf6unSoTQ9DFQb6vxoaMvNrrF2vghn1qjAvzRNEKyDQ5nj8ivhHu5jR9JzQea4mFWAAFtTPbJbeLzmz5Ka",
  "key19": "NRjo9tpQXj8ZdHpJEfYjwmnDBaGEhJvgDHV3t9kM7CdRNDxibuCJ4pDdoxCyRaMqPsazPxzdzVS1jiMhhYT88fF",
  "key20": "2x3Jb4ro3mW8qPF4mxJkH9T2khQpPG55K6Fqa8z8wMtNCyZZUnAcFkMoJnDvcRLYkYxQ6jvSdC4ckZVRDdrk8Rxv",
  "key21": "25mcE8qugGAcX5VEj6G4puv9PpE9VyeUactnrgVkMPkJifpDxqRMF5bCJGCC7jRKriWxyK7irGDmofujhHN3ZB9r",
  "key22": "Bg59byEHVnywpdwY4BxoKZWrukqaVjnoseFEveSKYVJitL5wHfS2jfromHcxBDmukjwPpYBZUAtuiKsoWwayUuk",
  "key23": "eoWSzyJP7jgScMU4i2qiqJXTWEmpV4DC2LYfjwhqCChyjpaHRKQhr9arv2LhJbJQYqzgb3sTgwMVygfuWWPsyh9",
  "key24": "57Ah3aMpx746N5w6xNqnSzeJjiuBeFe5ojadBLDzdTjj5GVezB5YRBNM2pFDt9Uhd2Z1rHCnQWcPP2mWHad1brKr",
  "key25": "46Xyg7XQkZehEV2ksHpVvXqjeCPRxeKGS99yh2FcBAeu7g2g7fzyCoY4fCoicdxDiv23qzrDpZjbgaavgwqPaxv7",
  "key26": "2mqeo9YaAZrGpVEa5hs4pjNyi6UpVaUTY7ibnSyUdV8kWtGBQrgMDe44UQbrr5YBNPUi9LQgDtYGwrN9W9NnhKEv",
  "key27": "tkbRoiRj1pGepTFM2khfA1hVNcoeEAs4zEKPdQJXtty6PSvSLV5wZPJCHEKJJ5Wow1wSuA42SqV5q3KjreMmGuW",
  "key28": "p3c8DiaNxkdNutWwnDjKggNmrWCYNrRMHbKzjCoz2F8oQDLmbDq3tz6GMoraCorB1oX5ALwHRztSkboZ8EDFVMm",
  "key29": "cqsii7jrGCv9Nmv6rXhFpqmUs6aXKc2YJiYAhmW2Cjhsi4PHU51eSzwiQqxTHg6yhP2omnvmUzNxjKU8URiq13G",
  "key30": "4hPBjMJFwmRbGsHAKAdhZbQtUSNooeXBLymMjDckdvqdV4MCyKN8yuBRKT2h1yMSRZi7YqjwUCpDqzjiQnNhstc6"
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
