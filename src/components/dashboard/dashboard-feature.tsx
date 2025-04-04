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
    "5YeRyA3dguWm3LKXF2e5E2qQdy3Grty1Fongd12CY52WXbGLin61H4STJWQAJ6Qcyw4zERKXCDB8kUxz5bDep319"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J1ghoRwV1s72RHXmYCMahMedcteFxYF3mAnridpE9Wfn2Gm1khWvJWJ4V2CEZarmA1viSPNnivCHgz6SzWhjyNg",
  "key1": "5cSaMBTXNSLah76YztYdzVBECc8sPzGXp3zL5KM8VVZ6gZWZXZdWi6856MuKfKteAYgKM553d41o85NdHCV1i3dX",
  "key2": "3Rvc1yrJ6visS9zn4NR7yzdHeExU3UG95iwNqcMDBDy5U2AhD9P6LUgrQxkcZBm8XyZnFonVf11yBZKpagipDpJ",
  "key3": "3fwPSQwkR2ymkBNxCxMfvVRs3EpkvCfarnZoJu8619fvsQChbf4qvuZTQLgVeDEMwBU7Tdkf2ZoyJropBXCdEK4Q",
  "key4": "34kXy6cJ2ikpXeTyTKibh2apV3p6viLRRM4wBRSjD4LJnDeXGRarLEv8By6wtme7w9ZgLe6T9f9P4EHe1YQqQHai",
  "key5": "xhFzLrZ78Fw19Cbvy9YXV5PPedRHx1QKjodBGH5VmLiWENzRW8D64iKoM6jWDKVQRNq4iNVJ6Sj3P2VGF1HxkyW",
  "key6": "2ErxWo3tN4bPkhJkwSE6RjU41zDdpL6YkRAqzDX21ab1NbM4Q4nDDcoFkCNVYvr8zP69nDhcwpngCrnNttP4ous7",
  "key7": "QyEUXKFGe8S14iJJXi9UU7aGCaWjSPdqKU3ykrA8ho43woUNnw9bvTwy2gNYTaBQp5BXYPGiasXu4x4TZXpmChc",
  "key8": "3NvcXzUzBgcCMA2cMEAyWqGynmto1HRnfcEdCfv3Lpp3Y3D9nVVbMqJUwQkRamwiRg2dHtai6ye9fgm4MWbnWgeX",
  "key9": "4ivBmtGQ3QSmtdnMgRn8MCMCsaACW67XmjyDakvzE1qb3kMdshch4iiqVmZWSmxf5sbeyRqYgU86pWNL6xrq2hvT",
  "key10": "5PFKVJN9dHNWY7BVrqmYGGJTGkjXmRhbQs48JkFW287wAFunm3J6nqqhS2B2pbmGbmpwhM6LmyQpEmW8TCfDLHE9",
  "key11": "CE7ERBLdMLvQm5uWYuBLLF4yw5vaFgMFGHkqxmFP3hL5d5Fwna8FzYTHNUVf2eE5xYMEmwRY7aczDyTJquv1ber",
  "key12": "5hNMiT9dmVA7rX6MxJMGZwVMpQA6aV1L8mnHA7QFc3LmPFe5Vj842jZnhjqkV4yHFxLM3jrNgFgWavCtGtchCkzf",
  "key13": "3wYZ5Evgmnry6ddqCaCzzz3mAMcKqfAS8v4Av1e1S2vECNW2KRCxiY49magyfBZ627mT97o9XGnfsEonQYuKhC87",
  "key14": "4Kc9mj7SfTTmoQaeVQDvZK5DHUoFe5KhZaaRuuJ5e62LtBfgeyDTVKwR1JZLAe1wyEujUTXd22kWg6VFYPuozXW3",
  "key15": "452fBZFT3ta4Gmtg3cHgHXXH6FkF9CcHE7HMSbpHthhWT2gAaKDn3SG7XRQL9V6kZqYTRajhraiRxUAYVAUSp3KS",
  "key16": "3T19qDbMGFmbvfgSGiT9HgDqDZNRsirh5Dn1FAe7zCyBWz5JeUnythtV84BrhojvgXLz76g2wUuz8b3PVXqXP6wi",
  "key17": "26CskPdNP4rGBEfZ6wQGcTrZFtecD25ASufbxQMsPDZddUryoxzsbekc1vf3umG4kx3BKpp2tj35YmM3iC2MDLvj",
  "key18": "4sDVVW3RhUwWx1TcoVCd7FuhmdqGrHUrSMAdPsWmd6kcQ9Ua7jYYGV6MK8JvkQry5HFNdL3X6MkjeDBZWqRR6SAC",
  "key19": "4CfwANuj6BPTP8cX4zh4ayFDEXpUHHX4AKtMJms1gMkCuopfKaGqaH9pVJVUy7Q1ed673AmvBe34ib4Pz4Ke3779",
  "key20": "8U79sNhmd8sJnHP7x5Byg32Pmq6g4QpCKw2bdTVePpKG5D2hDvb8AHjiEyp5DhnUDtS4ZA6XUoiyficAZ551QcY",
  "key21": "2TMhhUj4WqhfwPLSxycfwd9K4oLxdw6ZMqhYxqsX26nPQC8mQ6rvJXB8eos9WGXbUiCN83GHL5UDz2WXPDW2V7EL",
  "key22": "4odeEJLuqJ3CxKxEvhji4bSL3pUKb8bMRRQhVYYyX3e7gqLurQjZwNr25TaWZPaAsbiPMdG7kKvrgHF3cyyhzdJw",
  "key23": "53LxH2LsikpYKy9su2m5GZHioeLyaaMZWhqGo4mUfK62RBLg9Byt6tBoC4PK4T1iGMm734vNLPJe9DSGipUxktZ2",
  "key24": "LYzVMtBS7wa5MxJ8XNUxgYvRqzder3vq8VassHngXkiSvJZYcQuvk92idxda3jcrtyDNRzUVVEn3pJ69w8V84yE",
  "key25": "4K9YPJxhaQwL7oqJ91KkaL15zKMmim5zF6en3WfMcuDPCv7seurFZnLyrrNhxMJbPNjZqefMTSXQgUspmJxukT3A",
  "key26": "UoLGjEN59QQCX13KAwrkLe3B4HveJ3jwum7qL7FQhhxtNgNgYvGYkLRDWFAA8xPVH3mDw6XRiC1kJkGJtPFRjD4",
  "key27": "5Q2GzFemFnzM8EGJnxNEweS1RJdGmkZzmCYVMwWMnj74u66sb9WD18SpyjsDnuXpdYJ6rcZprnkKh7Q5nCtxZrE8",
  "key28": "3Sti56t2H5wWxMBsdJiTBhMnHVB5P232pEpjdZZH8DFX2kkb1QJXB2ttQsTP7qeW3ty3U7YzB5AZUpKBAxMVN7NN",
  "key29": "2EbBMwL19iH1WEbvByJkansd3GdxE5njqyVhU8AGEoTCtRWBmrMbD3KZSReJ9UKwdBDpcGHWPLzTZTBf4WxfUkba",
  "key30": "6WqrtE5yAJiLMfP9MyencDgog88rhmFVx6Evnv4kSk1gJqcVnhj23rnSfhQG7zWCzJYE1cAQs29cWnEQvb96JJC",
  "key31": "62bj7DWE6zv5zmuHLrviiyrxg2xcCXvv887N5vruJHoCTEjLh1PeWKvXFo1LZ7WiikRwFS25SePWpHQsZpry6quE",
  "key32": "49KAn7PamzvHAtcmZJBeQ2tFaJN8cm1ADBPv1A6k5FfFCJoutUCiLMGk1wZGGVM8F1GAS1vk46dHrD2b9xZzGdxR",
  "key33": "CUsdFEW3S7zDKuKJzUvm2E58MKMq4XwmPShktsoUcDyW3b4SwCvAFfh1Tgck5o5h1pYYdPojnzTTcfB9b8KBXsB",
  "key34": "2FF6XH8dQXCvseUoFjdmB61WEtaydajyZaTUninhYDMLoZJxGPSTfzZbARD9r6iuc5Z4BVUxqPpLT6oB7b9peKD7",
  "key35": "5C9rQuMoFFDzvUsTtUbxVZRwpjKC6ymKbBeUwkqtoMwCHhwmwgnx6iRgmzaB3YNWw7Wmca46ZuLmD5L1yWiB8EFY",
  "key36": "LtKrovX3miFW5Mu2NyYyeJnhgQCXvdU9qsNSgfvCCJBhisNphjugbSwbi6oqn5RdmdxLmSmMoFaS7h6FF49mEQM",
  "key37": "39py7suYGiFMhz5z9Z3sBVPWrhocLMgRqJkZN9CdP6J5vJwh5LcMhXd2kYX2QVvwNjSdssjhpQFcBQQEitPSh9tq",
  "key38": "3G5fCPMSyY3giqnsXhAg4LQM8dw25STn8yRCUpy49QwNKXEN97en2MyoNA1WDdwFmoc4f6XeNboTGbhXSvJ83ooN",
  "key39": "tceLjkckDB2W3V8Q7So7XkqPLBsoHUcWt8p6BkQbpvsZCvXZzvjMEDgq9tX9ZgDh4rpFCawwQQ6xpSBaxfkjxmo",
  "key40": "66LKkfWDeUR4TV7ugh42USaLetEP6wvkxGy4GF6dV3BpAwDFfjmWykmyGt3NBiaafiJ5pX2yhJzkE2uETLYhfSHD",
  "key41": "2m9Dy3fztQyJ4TM5f43qHK1kjR7no14GYrr4yZK8GnUc8c1VzghhqhEADH68U3eBvjUqYbTZ3gkt5CEQW1KhfGr1",
  "key42": "2iPY9we6x4g2DWTjqXZj5WGTLG72wJSJ5oDmPqTyJ1fKHCWw3jFYUJAgsnpiGefMbZiCSXc6Mc1gJAjCMMLzhDL1",
  "key43": "5P3bZ2M8GqemCCUPVjtEDx244Lwv9mmbwZQrELjUa6HWP5gkVhHvC1zj6zzt8DaVG2K3xThwjUifRJLjkZ9ATiHa",
  "key44": "4Q1qHSJ6HFXbxccMZsEzv1eqjzRNA9vViXRU5mXSVqkB3byG1qy5VVVPG9deQAJdGR7VrtLG9CXeL1mqvGSJEcSQ",
  "key45": "2PqUiCaQzMFjGVLVgemZV2EcKEg4dYBu8Jrqe47sCHxCU5WEq7wuNEjBaia42hpwFDcQwNXgzoLqNR32vfh7TcPQ",
  "key46": "3fwybTbAGcKjcGmCRE6r1gMN2CZPympjR7382tM3KPp47UdyDUtJj1HKKSK5eHRb6W9GJm5RgGsrZrp11Rgidsrt",
  "key47": "4jgrSYsVMfRqnKQNPPR5aCDZYms3tug4HhbR9Zr2WGaCWLiAFG2FR7DE7d7R3X3MxSD1vh5XtAvP9VsgBa9NmTn2",
  "key48": "5Ft1uCJqVXyKWSKBoWCZ3VWxLo567PanuNutuzHxSag1e3kWcRN4ZewYqayR7uX7EThx2VzU9rcWwxQMQapubtPD",
  "key49": "52pxQ1Fm39bt5y83VvyNwhuKdhr1HJazDR5w6PJBwZVyPzyYJqURdwYxecRRpzGWntxtFMFiDpStiiB5Q2DddTT8"
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
