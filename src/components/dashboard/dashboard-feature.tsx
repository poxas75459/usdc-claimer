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
    "4WFvjgfGPku4nEumMbiGyxAd7WSNcinuLJF5qsu3LsGsaHsZK7kiFvAU37sXPfB2rtfb84qWTnfPC7yeWAxBz9sD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "213EvsmrAhde9W2XaMCZEt3PCR1sBRpQey1tBmMPs8587SQNtiRWebfP7v4MxyFPaR4hapo4txSmBvGiFhjo1xCi",
  "key1": "34tZyygVsVgdGiFwe13WEYVabm5TrMpuNRzssxHj2QP5jHv3mhqBkfJr6xrNjw46bC3JLUD114sLphrdaPSNqzbk",
  "key2": "4B5k5L2Swn51c9AppMPvCexz4EoSMHXvuoXWoa4EBNzK39NeMwD9H1HvHfiknkdq9UVipt7fRfgowcpNDmZ1hujM",
  "key3": "4N94F7d87kXM1oWSq7n7QhzEyWutnCFS4J4wUs2B6A6W6mBBN2Ry5vBdoTn8ECMHX5d3gLYzBdGGyxASo8DDt2r4",
  "key4": "4JxNA4VMzTZzotU6zMwxKmoHiECkiwhVaXTEyjYx4EopsmWJ3d7L4EWMJb1aFDkN8PCJ9ji5rSCXddk93p5fgoSm",
  "key5": "KvR1zBEYF1cDpTcfG4dzNvTYU21n7kPQ2uDXFwur91ksJx4D5k63k4J8ouGNufNzJrrh18BwvtMn2kVrpAXUNMK",
  "key6": "GKHAdJ32asmFe49E1ssMPN3mK3SaEu4xtns6AN6rKmFHAJUEbkR9UupHk5kHq8sv2RbA1587rTHbeTA2GpxWUP1",
  "key7": "4be74YiTRfnjkSQaF9nz8R9SES3hpQ3mKhAd8RhwhTqgM25EngWRf6pziiFMAqvhykeEfFsiunfKeg6irTWu96VJ",
  "key8": "28ArtWT2vAZykt3V2gHE8D6qs2mE3ZCUfqFjZyLbvET9HgLzKpB566pdiBeDuX8q3TpBHDxcW5Y5CroXy6DY8qYU",
  "key9": "346RCaAFS36xzfzNDLD7hi5Q6J8iw5irzynqmEcS3ia5fUqL3PBjUf47AVShejjCKSPScTgeKcx4rJMSSnBAqgqy",
  "key10": "5jL1Mm5tc96ZLtZjs8bJCybFS96oiS2F58mhTnFjfpSLgcHD3kTBU1AF1U46zDrcgJWAsuz8uYgCwm5tP7Q4wN5H",
  "key11": "pRGdZkdSLUaru48i33PpjQJYNmvUBBSpbv9aH495DHujmP3GFJd1wmJkVbtKSJN8wvVPwodP4XKDXtb89UtcaXW",
  "key12": "2VUrjr4wAuLDbQf97KCA5dPGS8ptRCCb2QYeXGUJbWNcbeC7GmitQpP9SKq5fGtWUUEtKHvFRCuMSRJnzmwQZ2b7",
  "key13": "4T7LfBtmfnkN46Wdh8VFdXAckxhtEsAADbAigE4Ckdh7wi73tzWUj4p7yF27m2LXuc9NC9VKkPnhK6UvvwPWZfzH",
  "key14": "4K3rUu5UoVBgWAEjesnatxYVMjAfHw1wiotpsJpbLchMcTxXPGStCx32NcRbSH9M6LQZ18knCPMa63DzUQAdy25J",
  "key15": "37CunkLN28vHGwhVq8CPyJauyvnbTsgK8ka7SLHEpsA4RwK4MvdtqQsHJS15KyRNeK9sNYvLhDNSU4zzWdsdHGy1",
  "key16": "2SW5XEEwFoT1QEQJmJibNUKcsE1Vkz7P7i1HefyxM18eyiPhexHni2eFP2sPrGP4X4APirPKY321hU2h78T9tNFd",
  "key17": "5QFXKrAEA1fTtPPyDit2CmPxw4tjVXUdRTe4Ye6f5LyJL36dGtqzUqHJtkboNVk9W11F7bdhr4vj4Zuvz93jP7wJ",
  "key18": "3pKRzEv3DiTvyESgjwe6VrVvfPnddPtT65rfopEBow46pfsCraxXnf4DyswJmjUHQYj3amxMvFiVBp85vFUcNgkf",
  "key19": "58RcJ4FYFHAZZDyAKCoGj96bedT7atneeAVPDCx26N387YryLL97Ax3dsaiGhHXvqHmGMv82pxtM4pgWGibGnYAS",
  "key20": "2juuCdff8E18gg6MHG5JxzZgbrFUd4mJZAjce5kW77LjVMVgVzT3JtH477EFjt4QvdNg6qPM8NB653Y9wZD5WzP3",
  "key21": "53VjBwWSy2MRvoAfwykig2cMeym2tCnRPTRLWyEENrCJLvGmvPooPCmxFP1CgFuyzDjScum3ReCghVaWgp4m3XJA",
  "key22": "2f7H3y6jvgYMLZkuRmqhyUzgKNj86zJwLEuenPSqZx4ZUSDBWSQzQXjQfQvtQDCvcoKLzxajfZm1bv6vydWkuqw5",
  "key23": "3vrTWDrANsXd5m5SCn1hfo7nch1YjDvALrsf2oiA2sCUE6X3ZmkytxaFwdSJhvPjnh5RYUAtZUUPBmxGAPx1ZgL8",
  "key24": "MgDuYkw7sN6DaKNkLGBsLzKgLd2ZyLV8QvaePJs8M1qtTjTaTr4cbBqf7quupC1Y83BAi5pMurZyuSLGwKkc1Z5",
  "key25": "4bveVPEBvvPA4iGYJD8ktv6AFQgBwCwPQnKYjKuKbrhgzvmCbBDeYExrrs5hGAXLuNiMNgArzwqyqz1Lv7obuUU8",
  "key26": "3FmxWSXmHVTFE1mrFvJxjCuVtJtaW2ZqYuir6gLbPJahiC6vjesmCVgNFipfMNnbvo1Q9mRsse6tpJ1WHXUnzq5p",
  "key27": "RNiC9553eoL6vxQps1kT53ouEGhPW1vrjYGEs3VN4VxHNRWJr5c1hLKYUwgMR3jopHxDffZGNDojz99TradvLXQ",
  "key28": "8mVZYWvqoWw8acbZWGf4SXFPyWnVQ8Vj4PwEA2H4RMuiLpCZmqz78xnXSCC4g2fzqxnN9ATPTSfqkcr1ynqyfDy",
  "key29": "3Qat5bpACWa8Rxsx4qJo6QyYDft5T1GaQnwBWuJZ4zMWxFqren4oCM2m39y1P3k6RXNQFr533PCGPZ4PqTKgwXV1",
  "key30": "2aJ316XvKBQVFUT5WMFrJ6mhBnFAJdfnvhNN9LLqmGU33RmqUs1r6JZhACBRtwCMQ1AAsZUvedFJ6JB2LhuUS1i8",
  "key31": "65RTQNj21d1XKWu52g4JLaqwt76Wdxwfmi3Z63FaehHmUaKFju8nqxGKsw8sQjmNrP6CUtdwNAz6BhR31SxnDKxD",
  "key32": "2KwxbnQbrvBLfAzxoJ2fq9KTfNbRAAGTyNqHiKgtvYBmT5UEChmSV98rf7SwXBq9SDp9nYXHHAPfYKXKD718t57X",
  "key33": "4z5jpXuxC9iM9XvYcMWutHXx1rY1L1umQ2BJaXJf8ez3Qx4XyBuaH2GG8mjiE6dHs2D4S5WFBRop53sJKTLY9ka2",
  "key34": "nBzDiu9hRYdAk2yATJNfog6exhzLbuKpvxZyDT11bKbsoRvFQAobyN5oAiLWysNFBMrPtfcca7BumQEkWTED7Fi",
  "key35": "3MWe8s2wNgTgKFvemV8gs8BZ9woem9HM5oB3fqXWGKh8BoDHaaaSn75aDkTe935P3UMAjJPeKi1VNJCp4G3Bj8H5",
  "key36": "2Q4q6gtEtg4YHbkJCDHu3dF9JmbN2EtLbzpGLeiPVaCu75fzwCsXJSBVMpFEx2UcVARsDacKf2Jg4wHGSaQTyqwK",
  "key37": "2vs8ufmanuihPTK1gzU6a5DJS3FH3YGmLMnjpaXm8pky6KcYVRjWNnYRyEHcAPEj62ZXP6Ya9r2tPtqf3rWbj1LP"
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
