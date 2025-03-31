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
    "GsJ5Vy9jsumMnwfzmWRzUg6kEyJfcpvvcn5E1vAid5KPae6mVc2PUbLgPPLtssay1ToBA9qMuN7yWhDAHi46qzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N8sYm8WLHxX1Xc2HSnLqoTYH3LGDPXuScQBJL3B8P5SfNET2pDfpq3LBRY4VYGVA9hwfUyAmUG946R1AF8rGgdU",
  "key1": "Wg7BKw8uJEdGLEdRgfzJKX7BMnNLB34xaVSG7yZ8NwRP8YsYZ2rTaw6GpytGbTm7Rrxh3afREJwZbe798WJXqGU",
  "key2": "3AVjaeDMZQxMDjXXaasLWu8HwhXh9hFZCMb68f4j3sr63NJhAHewLRhYukXpEw3XJHZ7XEsTVncMkAgrH96k3GPU",
  "key3": "2sviPRobxXb3FYun8Q62bUh9ZvxBksGoJNVfLR8KoEmMBT24aQKAHRMnsPc3BkY2DzCGz7dLhTUV3RFZdUWqw1J8",
  "key4": "3QFSVCyg9xRQiYMFQEb4hwBn5D5jgcg8sdck6peNARckq2WJRsPDjkghsg9zavkVL4mWgR2aLXQAgUqqdPHYfmVx",
  "key5": "36ZfoVffEUdSL684m1tZdVmcTbURWm9zWiBtanfpPysqq7n5tdbB5RrcGfbYxFDUKjVmQYm9Dp4wRLpB5p8zET6E",
  "key6": "4YiWYUccP9D89S4pfbyYa8SvwGTHAfAkzHsQhs6C6P6DnFDsGk1FohANkbKB9sKZLHFeAjAex2hnUHKBmYojJ4Uz",
  "key7": "58C9RjdcRXcyTDu4hevsY7AUJnb9ZwRvEDKNB3ot4ajx8wqgCDwNvsgAtUNxYDBnkWMsrVVdMmY1ebJUj2EoNCAx",
  "key8": "3LuK7DDyMMPcLRmrjDLseB7DUDhayNvqn89xx5CiuxBgPoskignq4KQJCzW5F1sv4dAuiFqyx7iAzpTqY7L6tY7A",
  "key9": "NhxTTQ6MxiJTsXyh1U64t186KH7H29HeNB7eDZ4PqgWQCXztSzyxMegv9B9W7jUwcSdmN4Cs537wab79xdDhm6X",
  "key10": "2WHA6nyxxLGQwwfSC95NCeQt3b8Mp6o8j7Hc8MXhaF8aPWfVNGwdbYRYzUakqE7j5Qpy7Y4tg8DfKWb9GH6KvAWn",
  "key11": "4in8iiLLMRoqke8mFBMyATcAeV1dtMSAUn1pyXNV5nkdGiYAMSJte6UmVZRmCXws9zze1uxZvyneNFkujgz9yyV9",
  "key12": "48KYENQtPaGjSzQAqi4toKrbwRxur9mKYNaMSKts7Ggve1x17jURYPLG49nMgaarRZgRVcEvgGabwYHDcpPq7TTH",
  "key13": "AKZafmLkBWUv3FMoYsAF6McMN5xjsQkaQm72rF1CiHazuumv4vQbHpg7ibBgBD1YsksrP3in4zevWSskN2qDvVU",
  "key14": "4Joj7vKddXAvaDEqgDE1dx1dS9u6GrmNQ6VNRGarC3mZw3pSvBvMVKq3Ck2zbsHj2aHZQS63GfrPkAFEFssTV7FW",
  "key15": "5RBb4f9EcLdFKB1S1QCBND5Tb9RJpEheZhvzx5uuFFAhQWL2Nfv29iKoeEUqQFsjtkyh2jJqSZzqSqZ5W2oL42C5",
  "key16": "3dmNemkybxpaFEbe6T2mq2aVJtCkKJ5mv7dyM1kBbAJqM9kH2aRDgHjqMGWiSMav3fWPzLVdxX8gXpd7LHCBeMa4",
  "key17": "5kaURpU2C3ooHtNBBpCN3uMTXSLaU5fru5hBYT1UDfni3BsS9HVfiEkzHLFoFY46hFKqM6hKy7DGfN2NaED8yt4i",
  "key18": "5kWe1orR8Dk4B2MvnYooAHZ9xsHYTqSnZb121AiUzHxgT5TbV3xUYR8PdvTo6mqF9GJ7ymM3gKsfxs23moCXaMPa",
  "key19": "5yaDZDxSKfXJP9x83LFcLeBzuALSdCdxsmZkFbSJzJircBqyNsVciMJUSaqrJQV3MuwC4YemYJCzbS2iN3KzjLzz",
  "key20": "3wA2oUHCii6FphbLf49jvU7jmAwTsu319i4qcDuL48nY9q2dmVUhsMJW26NdPFeu2k7ev4JU2vqhnkc8dFh2xJLE",
  "key21": "2k4AYoTnFEd15T1FhJXL24taHhyUbXRSo4zst5oLcuvNLj4GmqfaXR8KRZZFW9R3iQNe9V6ofjtgoR9QPcRHR7Rv",
  "key22": "5hdxGpyJ76oUV9TcjiSdCEQ2iSuujHyvu92EMMqfrJZReXHSt3RvohY9aUR5udHB4BffbJwPdDHvJGJ9rmZdgsp5",
  "key23": "3Wwu1kMAyM8ND4WFkQsNL4AqT5SgircQt6WKbbfNrtW5rqgPwAWDpmvGJKnx8tYdPQMkcrpj33keW8WzUKEacuC8",
  "key24": "3tYX193JjAmW6Z8TSNP8ZSiSCUppNVSh1E5rLjx9YixHiq5bxnz3223zZn1TgzDJaCGVtuxr4QRBbKbjTFgEa361",
  "key25": "4Cd3zKpFXXrMTYDcze3VUAPyQ5sVY5dt3UmjJz8dRvLvhZEVec8V6oPzUEjNpMYnKW5yinYSw83RphZErD3e7iMs",
  "key26": "497h8SiYAi3NfrgHuzieAeXMfPB39nQFiWFuUttFDGvZcM5Gy4L8VQW5BBRDrMgT8k5X7eZXDcJfuH5KEFcSimLc",
  "key27": "4DXyP9XtnkUFArhWjXvurZ9Czq7fGnX4gwiaLgjcwBGtTTNA4ZVqe7QkeCa37sVE2we5K6k5AQCLnzwtboD69HL2",
  "key28": "571Czbjb656RUVT1f4gUsasRF1bfgK5ERSFQ9UpkmV6xm8Ni1jn3N4agn3jnRt5vki7Qy4iow952KxuSU8jKANPC"
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
