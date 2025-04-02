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
    "4MGy6nXeMjzuUUd43o2SQt9ydxLH8DWP2gm84rNZYxS1eBTwDRAUHJkpT8QZ7YnzxEXggF6Awj2MPyWaPc1r48CN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Rcp6DPYxHmCycTehR5ynDuBj5FgsdvbRbViRNVAmnxZM525ewuHaubdvEkA8i3Z3TG975irMnahgTWjfQX3RVY",
  "key1": "4aCyUz1djLa2H4qpNywzNxEcui4Rp1DX6Gg91PD5Qc8gc4TBNEXM7Q2Ay5VS2G8xSCuu6FSFNzDGPBwmguLMoToP",
  "key2": "5ZusC3NadFWp5VjCJzXBbHSshae7xmjyx2rZ4eHLob7APoi5GwjpR1Tj7hR3ym7CymwADJZU8WbyqrZDMGwgbVcH",
  "key3": "66CpjPkrBZ1C3X9GcJ9eywn48P4v7qju9XtupgRHcaMLSEykSLqn9PF6cRVtvjeBFdoQof8UWg98WiSKGxXA8xqo",
  "key4": "46313ZGdEpCgY2kqipHvAQciYzvFvoUM2goVgPBmWiR66ugLxXyFVudEUBQWgazYwbW1CfSYmNhqbwqNSSJH6wfN",
  "key5": "wdkQFcCxAdB9BTendgay4qtNvYZD6KL3aiyNpn1wW8Ea35inRZxDGxXhmJkWW8Ew9w9fGNy4Xq2bQa8mcjAgp1M",
  "key6": "3GiUVYABhKMxRhjpLHszMDUP42M1V4KjEUeGfo7aZeyaRNEz67SbzBRXuhNcNirgYYMTt2zx5hHTZZxCFUcGfGap",
  "key7": "2pwcyozhWofnZbmdBR1VmFLAFUHZTudUnJEgLkmzuhbgyN5y4wYeW5tKuG3aLn9NTu2quY1rSUd9VTcK2UUntEj4",
  "key8": "4mPdG7yS6na28NidrNyVPRj5DtAsU3dJ8Tvg7popLvhYv84syHdKZfkpSYpwgsrSEhUDerGosYKrA9BUCfWym8Lt",
  "key9": "3QcoqiXVeJ12t8yFaSL3ZLUVvb8YFD5nphrWfKqro5CvVMTek6qHrdMgLEzKCb49fcGVABkPtAwkM5a1bHr7M9eq",
  "key10": "2UHHG649n6ukSPDReUHp7yxdBxiHRtbicrF1VmxuupTAHHESDFLxh6bQ7cGZkH1pJ6snxGv8T1yMoN8aXnWRNTkm",
  "key11": "4CyE96tghjndqMbNY453aBs1snXa8kuvzXrptkuMkgiDWbzmGCo42qgQyuKJHi1Uc6gwrvc6Zb8fNfxFx13hkKC6",
  "key12": "wFXfJ8cwctYUZv8zRWJKXnv9R6Dza3cdEkZqQT4Y9WHiFtXFWPD7zKqnDexHPpa5Q7jQEUDZwS8b5kS1gdSFL2t",
  "key13": "3uSqvN8eKvc9r98RcXSLZbf83UMHB49rXo8BnuWPuNk5SCF57AJ87fmkFaFXCfaZf5tj8u9P6iiB8r3eat3uVAJy",
  "key14": "4YAbQBmiurd1e1dTt2dXetitCmyaT2bYQ6PeBHcX13u6YUWbcGsAt45bMKPAXfBRPMnJDwDbY6NNx4qJQSyUhPyi",
  "key15": "io6mdph1QfKfYx3S5K8tB9niYj9BrtZrgVAuGtgEwNqyxMLkANwEqeE5zzJ4KBgz1N5YehKtnCQaaGDRC9nei3G",
  "key16": "4S4pqArJC7g1c84G2Sx68H7VhP6a2BZ6stjbzjPVANPvzoasDUCNsxpAF45TLBEVom3TJgJmEUTKSGhZhCHiAxHx",
  "key17": "2o43tbDLx4cobemGtmQ77K7VJ2c6Ma3BMoJf1wVWBeXhXPcBW4aPJP173jcjJU5KtpfgjV84N1ZQHWb8XE3ttks",
  "key18": "3YbEiTvQ9HVEJahMpRfiygWMDGLHrZuLM9De6S47ExE8gibpBfvHfhvxX81435wF7z8NGc9asHaSdMSMRUwnix8i",
  "key19": "236k6U1Ug1UoStM1VmQwLvvQgJ2LSGFXU7KYNNrwao8SGTCoQcVQz8Q5h9B4vmtUCfCfwcGre7Japjij4PZixQhj",
  "key20": "4H91RdwTubLaaRrEuuc2ztVH8QxPTA2F8nJc7fv6iQincRDxQ65umdKQh5dj4dyr867hZ6j5Bkzwd9rhRoo5Bne9",
  "key21": "2JcG4vEFspb1YrvM62Hb74pVWfBJdyN6vp3FmJP9arnVFzM5XCM3xVvDsJLmmTYns3m7ngGYm3MHdRkAY294mqsx",
  "key22": "Gr5NW1pkeey8aNBcxtF9RrMhpFcyXTTNMgdtVJ25H5dy6eHs1G65UfFXdEAcq4diw53WQ5tPjSngG2ngks7BGou",
  "key23": "2V47eBxF6Xx7WiB9QtsSLCvrxwLDReDGDs26WKGxkErh4ba4Nof9PCNKKMiCir3s7qdUxqaPTkm3gwCxbFRa5ard",
  "key24": "QQraoSE6Yt57kJ77iynvKzyMDnbcQu7yVXBSqVcpC7tPdNtjxUHPxeHJrtgUoPAQmeLSFw3fXm1Tq8t4t15ePcJ"
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
