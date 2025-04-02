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
    "4mBMiVEAM4u3HxDUHad5Z5E3JuikibEm2ssYdBEvGMMG3eQ1sUrST7TgQaUkrD7ddgHacXmwWmahkxFgxrVGMHEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YaFG1nEeXk2urhs32y7EG4cpZWPDDVGFu585yspBtuVpJUKsp5LpEBP7m2qP881maVAUKxPbVhNS3gYyAA2jz9K",
  "key1": "5apCgstrSHJcb73ujyezfFZXZywVcMrrpXaSwENbcVKHcH3izx1try5b8fDFT3BEKzZf9H1hWzcq2uRsFkBikGou",
  "key2": "2mV1qpDWepVDXVX9tLSWnGu7GYUAPnV54guvjdaBALrhbngJk8SgLgCYpcnAfxa3UoHGzppGiF24qd8yMsMbXGky",
  "key3": "61SVyYodHgh2Bn1W6Tex5oB7r4A9N62wpUKGtgX2sf1DgyeXAWwQCLg7ws7mWmoyBEciwBYosPyr5DWsBXXye7Qz",
  "key4": "5MEpDySswDS7SRAYcR9bJLmEYbeh98YNauormYaRLR95pGTKaS8SvwsunbGRwrJA3dGE7wUsuNrRrvBC7vi5jKhp",
  "key5": "449KKfmF6mfTcAnC41PGYi3bEPCLJdLDoctUpZNrichvigAJ7aFgrJjtYGFdiEdZ17TY8TUSMkh4Zpd66f5WstVm",
  "key6": "pBxYcYEUY4KM2zJohFskbP1Nsk44k5F7UDyRwQn2cAjLBcjSNYWVrBvWgEqzcUnkhRE1RGtL1vfHgeZXBEnJWA3",
  "key7": "4jVRuqRXsN8kNvLHWwDg1exaQvbAMWNaXw1RgVnKNMhZtssKBbiGxoyxVmdTQF12E9pr2RVYCjP6FxNhvhFGfnvU",
  "key8": "4aicSXzwNWhYAeQnQvn7JAPu28Z9czxTDynJL5rgTRfyj9nDwVC9be9sfxAi56D3BmyJ94CbqvM7Wb4BiAfFXyqN",
  "key9": "5joVmC6SCBnJthmXbF9NMKk5uzwKuUXaSa9oMc95cpX5PfWL8VW22BvMxowBvj3MHfM6jQLrcv21RVQqGWyfZsaV",
  "key10": "6nmLBkm1FKw9qioz64TAZLxvZGrguHcxXSJEdz1qiLq8phjNUQUuPZKm65yHCosLejq8EY63ipZV1ekDKGRydDx",
  "key11": "2hbDwfaL3mxruMTypra3E9azgKFmx4viZepVpd1FsjaEFigcr93LssfThZbtHxcqE1Pkp6PPyUbyPrH7wXqxBPNi",
  "key12": "5KuP181SjwBYYG8kjyCa3xdEDnGr7svt35MywAzkqaXThx47SDB8tgDDfHvV97vWJFsPV9vbHAP8KB9vHvWc9zms",
  "key13": "4d46UyHmwqfBJRtYUr6u4Kmfw2dR8u9pSVEL2Hg3HVMKpFvwmtGeQ7nDC54whcPdonkS7zLJu6DWFeUuYwUEKPBd",
  "key14": "8z9bmN3F4aAJGxQd8Cb3zeHjJPF7x4Uj3twXeiiCWrsmDYbGBoDPRTLbFfmLVXGW6t9yD7CXJU3BG7Nr4LzSvrV",
  "key15": "4GuhnZzZDgDULzEeXTG9kwQMpWJkjH4q2RDiAbYa2QGQK6eH9dqEgY1ur4uhzTXdgySKSNbfx4smzg88T2ho3Jy7",
  "key16": "3biigdUBUBq7uhLk5pAeFj777q4AVfZyYMcy3c4bgvYEGFgCs1dNRYaWuMBi8vAeMazqSKwaknB7czhetKi3K84d",
  "key17": "3xwBqQUvsFe6KWaqirVioxd9ArZhWUYEbZV7pDmD9QiiS92kS3qomhYFEchArgLHHEwGet3sqnyxtRs25ysu3fGh",
  "key18": "4Nma4TJv65heLt8TFfBPV6L1kavSRiM22P1KziDeZsMJWE18zcgXxAEm62uDpDPPY3w4ZUjEdVuMzb5MKwFtjnow",
  "key19": "36mLC45oCkoqQzwFQEh992uXTnr4h5CsXbyXgZwh4wB3WiTHaTg8jK1qz3Yqmbia3sRidiHrJ474tUnAzVGon4P4",
  "key20": "39PYyge6U9hvtFaF3BE9iTz9QXBACnZerLvvSYpNm7cW8iB6Umphkq4Ndaft8dJcCF5MBuXmH3z7Bc1wWh8QRKU9",
  "key21": "5F9PpoEWmufDqLZX7pnD6pzoCMghgaWzMeyMJiwkC2A8k9cZVD71Jub5NrZCFZaokfHFSh9ybjzbvK9kZphjHwm4",
  "key22": "4bsdQs8JyMRTGLZPmRQNBpi5DT7HC3SCcH7nP5YwvebFNpnDbezHBSL8va73qTFAEBsvDczT8KNzv6rpip6iHnEC",
  "key23": "2BtoJpyW3qqg6f6P5KM8vS1urGADWoM1b1JPnFShrDVBPujKg6vSJPSU61GXfnh7HeD8uUsUqLDFszcUFXMDhs5Q",
  "key24": "rjya94tcKrZzzcgvp3ihL7gk2PUf1Fk4hrMiePaVMmCkN98MWoX7iS53VbuQZ2gKVjzQ5SNjWdkyE3SN6twcMLP",
  "key25": "5iCtuK5CdeVaY5F9knPbDULWhD58yoKjsPvW2CmGSBKLiqh5exGWNoe6sFoFaAQxkFRZKREDDWH4NmcZ37keiVWA",
  "key26": "5R57ZjjQsyYLDbsJo3UU2o5ttMnDyVhj7LHrUfuMEBWXS1WRsdpRheKfdbXQWWEM7YnkaPGmgVss8VwmCcC9TKDM",
  "key27": "5wnGRBRB4XjGJkM77N5x9A8xUF7BMHCKe9iiecMDp4nfdQC8V3mv5xc8jEQ3VQi2m85HT9CNrYJhZNKsV4qgXePC",
  "key28": "5sLmimMrUpcNo6WytysUTTUG4gnvxvUJLrV76NfferJS5dKCSyNgregdCGRQ8NPnN19NLhpYQXT4bs9wZiVXR7bc",
  "key29": "4LvoZuR7YCyT8W7WNrX65PUdE61a3cWctchSdHLZU2xzNnW7RfNSn9BfoHGDuXEpyESfHFeCiAiggZSCPoixoBtC"
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
