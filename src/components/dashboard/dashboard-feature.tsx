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
    "RudmFFPSapxLgnoR5Whs8g9UEHNvY2fbYMfWbL9hJPQCLqxHxYt4z4CdEKP8xNsxKTzNpKrZiHbmdxRrw2S6bqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z6tNHEoLFK6uARFPGAeEjKbUprAqwUNXnF5Ewmq6rVbPm2abPz4v8gubJHztEmrwYwmNhbKJHMmqgcvZhm8TuFc",
  "key1": "2nJsFQw1jRdSJvZyguCHn5JJfBtaGgx13Ycuqo8zXStyqfL1z9Bbqnx3s5daW5VpnzuNKqbFUuPHyVeHAnfxa2EE",
  "key2": "3F47qb2WkfFxZN5BHZLx4trVcA2DEPEsPhVEiefZpfVEati8FzUEdbfFQXCwzSBeyoyAauX5TQKk8JHX4veAidCj",
  "key3": "3neUaskjRGpsk1jV7vv7XCs39fJbdPbADYYp7QuK4ugwLsebQxNWgio9bboxmgXLmJJ9CxVFp1wxXtnzTHdwiB2s",
  "key4": "3StmWiLqaH4jthyoCSEQQMMJkY3hwnxbP3BjehxecbP9BPDrCtw5GkmfxmDCA6tr5xRg2qkZk1axHXvvZre3j4bb",
  "key5": "3eayHYHfjN6howUSHq3icRVumFVBYLArUtkRproTtagGFBDhdMGzz8RbbSA4ewwW6nYkjKuQwvYDoKyQ11zUUzxL",
  "key6": "ew1Q4wvrj9LENgaexRNcETacxsAswiXRteJZbHXoBNHkiMprs9QmoxU246ZDXbzkaq5r8iW9CGAV7Cw7epV3QC2",
  "key7": "F21QgWVhChJ3Df6kM7mk3rbkEB4P6SyLpxu2HPsneThHMBCLGWs5SG64tCTh57aoGSyCs1ep23EvCDtywvnG1Wv",
  "key8": "42ZiRCGgH7qkLa7661xGwcCEPmmnYcKtojxdeEX9C3eYQGMNwWzSeT7Ck1PmL1XHux1vRgVEV5JJNpUM7XPSRg7W",
  "key9": "2Xe5DkXG3xbU5FjDErVZ94s4AspAepz85iRHiWvP31pAt3L1waNbMYvJgsBNZskxpffGG959GWQwodjEQynX2qn",
  "key10": "3gjiFNK3R54NcMZVLSoBPtpwKecHcm9nWNFf2tBhdfCrhkcUuH1taR97Jpn38EUgqLLN7GNyhFJUmEgCGRgEmJut",
  "key11": "43Wiq1g72PwGkSsNqhzSBeam3DL9NxwTCab3Ry6ULUtqwhRCwSEbrZ5GibjVWHKQ48zoQoAcGa71ocpSnpiCuSVw",
  "key12": "4Hqm6cxY2vzBE3jXMBX2svaecM4VCZBk5t9JqrufJoacoqzq1mokJCnPoAPu3PKFQhZ1uCXx67o9dcMVpCb6hM6B",
  "key13": "324S6sJiULQ9QHndzfkHngNNbh7TCrqoVgcQAJqkJmVPuHATz7DQY3cV6Zdvi35VoDg4UyfbreDpzcovXWazdfsH",
  "key14": "3i2fLjYvM62g4G2yFuCv8BEBSskGoKUSxX5f8tFx2oGq9qS4VQiKUEuq6bcd2EGtaCo4SRt2GmNEyBJ1ScPbJESR",
  "key15": "3qc1sawCBZ98zdScnCuL17MpteUfo5eFbxMtrYMz3MzY9o1XNUEU8X9FEpVquBi6FoCgyPHwoLDNy1FF26hzZA6u",
  "key16": "2WL9zCzh3c9zEfBdHhuEPe2Xjcdu3VuvYzLG6c5NkajEWkdQvdQ4fekVhCsA5qi9UVMcryvvnQDDLy6drXdqmg9D",
  "key17": "5imrc5YbVWNravJabXvmVnx8bLpB8tgzEKxmf4Mth7vxPTKKvyxVR97scz73c7bAjjHb1wDLjANkkMSoNLfMxUZX",
  "key18": "4vrLhZNbGgXqXue35do3buGkLAWQhH6s2Pzj1nvQ532DZc4wBBuvrrYRCPehxKHDQq5vzRbnctBQMkXMCeqXrsgb",
  "key19": "3oQsVNwmzTp8GPURiX2ERihEX8dA1D1tsXBJhsLBwy8Mk7HMYkVqWWy58NMBr1CeciLMipLFyk67nLe3LQDe94dx",
  "key20": "2M3DFyGwPGkGEfswTDHwShnirmpxCum815rA5v4K6EnJSWBu3V2MFiF3t583qSoPwKeVcNsxHmp1c5p1VLNabtEx",
  "key21": "T62tVR4mS2FbFBUBmdeG2mrsL9RGtBbBEMYgckJKCRQubuzVkLtFDFpWmbCpoSB6TmduLmwuvNfvdUaJFQsJwkj",
  "key22": "3t9hnGNdxU26rF9kEQpxCRaCopKCocdbyMDQFvkaJGBN9qmTg2uxawQqwG7DJ8C4dvGCKhsBFahxHEzbu4xcFcSC",
  "key23": "2yz6BxTSV8N5moXZiYXHPbEWVBPHaAhKfCuaKsurw9rJSsDwgsMpuqitfPUTbXpu5AYPewxh4fzMsd7rdN6KyYPP",
  "key24": "4tMRLK6H6pHHfpsbXs9LUR4BPF1WmQFuE9kNtSM6PipxvhNvuwcDyyZnJrm7Aj9sQKwPz4ESP7fAQRnuXXrdwH4M",
  "key25": "5WuPYetV2DbQxAYm2M3T9Fcz76ft81j66CiDARn76bTF2nreRjTQ7Hs1o8e63p3D2cWbUxt7RwDWB7UwomRsSr7x"
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
