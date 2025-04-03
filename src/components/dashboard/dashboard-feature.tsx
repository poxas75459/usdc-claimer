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
    "5uavkuy4QapZPtVRSMoH2LCXXTBcnAcRLdFkyG277Ae8Y1waqajp9BhJ65YGMr81pYbLV13QSvUAZbmJYJUncsvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HvZ1UPc6XqvKfSYn6qnKSxVcYmpCNcF3WYioKRWxk4LmBbfYe9Fe4uUEDHyPhHmj3KgPzFC5ivcJ7Fs4XTNjiJ9",
  "key1": "tH4fiuECuwrPageo3XV2A9AGsJJqZGcZQZyNvhNhwiEnZmgEHDc3n93pDKd7xzypUUXku7M2Q7sfs4tnQhpFawv",
  "key2": "5Zd546zGtNamUVPrKUW8b4rv8gVUW1iHw71uR8LkticBjuosxAjVHa5fZ37tPDm2Y2LaJUKsyxpr8EFtvpza2twg",
  "key3": "3qS6TexhVjHcEn2iQYqEKnRdmUniy1ZK9BEXfvu1wgMqLM5MeReA1AmXwNot2doCRKH2pu5YSAkqbFapa9PnWJQk",
  "key4": "3GDVbZ64Pth9S5dwc8StnjHkowu4D6syuTstHwcPPweMrfi2RRuQATncLYxhAamNxY89tZkFNu3ZcnPcBGs7PUYE",
  "key5": "4jknWeDuoJNmBgnuTRoGZj7UmXerZWa8WzQWd7BVN8zG7yfSmBiRLPCuTtZZKcfSmm3PjYMzWCwSD1KoytnJnJim",
  "key6": "4CrQFhJxV5vjgzGB6ZN9dxumw7z4Wgwwf1NT1rcVV58C7AKRPZK8tdH1z3BGiijNtzD7n5tdnSEsipkwafG5ZxZX",
  "key7": "4FGjveEcsu6dorRTFidQLihFEm3uu3M1Cv1dh98WoWnjPvWGfRxx6LbuMXPTUyWCwMYi5wLFnY4bbt7C4zjmRRgA",
  "key8": "4e6i2DJxEdXvNWmd4BYS5RyEydAVkkXksu4ma3wi2mnjeW1F8yL9irrPMwfitAPeDNRaXVPyoWMgVQauiD9S7WJW",
  "key9": "4NjApAPPPz5jJtwXepeJJreVkEWddBk3ZSMUPDKJjbGgQXPUH3Gx7D6UVVujXAGboG9pC956LA4HJjZd8BZCZzZe",
  "key10": "2Ao84L5FDJZbbENxh3feRtu8p9dqirgEH65GpQt2aNJR8arp2LtAt3eSzG1cbAsGmP4DcRf9Z6ETigMMYCsZQMfv",
  "key11": "LhxENMPPKwP4gVLv3DnMrfdoUWFVEiT5WeKcJYAKCdpPQbuHLoq5ppnB6VQe4bAVBjbHD5Jx4RoEeAb7ynyecHW",
  "key12": "fZon4hgJaf1FGF8wxNywygQYngTL9jYy3cq33y68G5iRE1dKLXMr2w8Njb14fDPy3suiAipnVaHHtWHJcFHFiQm",
  "key13": "3rYTePbewbHMWzxfUNEBUkkKfyxQL6ZC3QcAeLqmg4UfAp2yMGQFag3zRTo7ArHTgSPVHarHmkVi1oqr6qKqWhZC",
  "key14": "5ar8U3KfBKeHrGzDfNNTXErUyFfGvciRz2QWWqCEZjfHQ18JVFMSMF3D3ifHwzUivJJbdzByNcBN33Sc1ihC1eKj",
  "key15": "3h5WDTRkWhdc6Uf2rybmA4nvPqLKJWwRffmqpiqyogs689y2NkArzTg2Nocu6rQ4DKoXngU5unJD8a6Exds7Bqap",
  "key16": "2CNjBMpm1iAoo7i7xz7vqxrKV9BWTsUjZYYboyS86vP1iXVLjgRbEjUUyujihErdnrdqaoGvoeRuRpY7ChNjE4o4",
  "key17": "2mKZXjrTLKaSfB8SwS5erWt5g7fYpWTAbLizezL9XMdWZWdt74qATGD8LNbjCWCn59urgrK7HumNJki47sYkn75G",
  "key18": "5PaMdWLoWSuHygTwstjjPZKYSX6MpxH5xUqXNUcFTcdW3JtyTQAhH2BViz4nTXUpYRLMQF8NGHrUJruTsko2s4vi",
  "key19": "2Vc46LsdCp2mMCp1W2HUdRNcxJd7KQB55DWXHH4bMyHECoWSAfFC34S73KYbpsyDUkP5fomBpAhV575ZZgksLDeF",
  "key20": "5LnCA3guh4gAEM8Wn8od8U11RLRGeivL5L6y6Dy5hxF76KABPFhwLFSxyFYK96srzqWPkYrLFbs4gcHYSEXTtxYL",
  "key21": "2NZucd6LKD7rmdcmKkEwRVCuxgTwvFMNryh2hhB389B5D4Li65BUAat6aThTYH1bR53yJSbXVhEANqXA7UpHU5Dx",
  "key22": "3ZsWaH5e97md9LiR8UeFBk3s7ckVe81xC2g4BTRxrfMyEanC5vcANy7By9ajndD89sadTX7QRKNd9hMGiE2pG1fM",
  "key23": "5FzhQDKbvb4VvrfpvWQETgduK4LqofxX8vCCSvpG3zJSMCj38Vyp38Xa9rgGGv8g66ejwhtyq7X8bss7xDCr1Knc",
  "key24": "4ENxgaz7zoWP9y7U4Zp69ZrfYAqdCRyTcU4VqUmM471Cbts3bRp1TkYxEFbhHo3g5XoVQEbVj2MwEZp8ThB9Nn2L",
  "key25": "4vGTfNnL5QM51e1U65rPfCRQxnnGgxVooELidjAKmrNPMcZe1bQhQSneVmXxG9NfbVMYkfzdGNLAdxpPVp6pT64R",
  "key26": "3UHEzyR6DsKssvLgAha4kRYxTq254rvBXb3MyCZf2nefXJrnTqsH1j2Rg6tmdwttTWVh2o3yHPXEomCUwGdfeUF4",
  "key27": "2QEYBw6t4z2L2TLGTfRTwwjC4o6VxWnhoMZg2XsjYP52ooxahc1dMc4jbXrrMi9RSXAzGCqsh2sF6hUnEP6c5NYW",
  "key28": "2JhnoDGXbaowqATqKWfrJvKk7b8MLBfjDwo1cB4dVRaCtH5p6Ld9Yx3tviZifKNp3CV6Kko8u7epc6jzXqQQxqGm",
  "key29": "3P6Y62JUPHva8FfsnxozMFTDCoeyrQe8QF2NWEHqXdEnh9qav64EtSeziveZ2m6pRAasf4o69x594nGt3kDiMqZk"
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
