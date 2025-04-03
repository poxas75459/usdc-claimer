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
    "4GnXkAevekK26jLwNbkVvAQBLQmYhZXutQq44e2s2BFoDzqmuteGw1R19Qw7GE7VwH3D4E3bMQCsAfRawnoXNhP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34suwAWSE68FouE2MRuhChCeQrRB1Zg72F5StJePPPNoxP5kGkCkFHnokuvWg6WoCuKgHPfzSAAkc6mRbD3m5H2M",
  "key1": "5LaVn17nNF8cSNHJNULeBiZw8vm9FMAVbcM5UWzLvwsff9pxbo9cXANvZ9pzAq2wtMTRXQKKhSA7t9Tqnugf1f1A",
  "key2": "5EAXpy4tM4bZbPPYT8M9kMQKGfzRnDLicFPHvoHC4y6k7AMTot1t84GetTcrXysnaMExkpWRCVQ7GkPpGXrJU23u",
  "key3": "5RePhjNoWHkhU5Lk3wws3yf7pBD3tUci4HHUrm2pdMBrPU7z1or1DivaNY1nmp1wKReD3UfWePjb8iiitQeKJpFQ",
  "key4": "3GFTM2NPPA6LKJKChaJNjhA2gmJGSNMs6kHXrCTXcRyU2tmoS1D6EReV7WQrXA3HhCNGKS4eQL5HeQYkiCy1eym",
  "key5": "NqopPqQwMgFTSzXDjqwSR5XNouR59TwptbYsEw1RyztC3A4LzUhCrGUYDntQZ8iPrpaemSRUAfc5h5aErpCE5Dj",
  "key6": "6tftUnfAwXB6YW5wbeZxu5r2C2NLDeYAfPfKFmLTxjyhj4Be3fox8QPh82BWCD981MWSYgdgDRmEjYKes4V9Rv7",
  "key7": "3Anc1BgdhSgM4oUmfz9QNttoqMqTHDSxdMPKnwps9EaScy3UxRt3oveCEdfW8NASdq7QLcA7TYH8Ne15gEqMRAqq",
  "key8": "jrQbn8wQuX2idcLhfY2uG12vsRxQBZoCDjUouhxBw5Px9EehpsdCLG6aWxCWcpPvA1xr9wsRP71r2NESixiMDrH",
  "key9": "4q97ZnK38NWiVA3CAry5287GZwY7CSwq2U8NVHwWy4Pp26vCTmkLQm4QEx69FYqwmD2okpVjm1MY6XNHSwyqP6vc",
  "key10": "5iXyHJj9aogR8NzUR26Zm8SfJPkM9opgFXCW2g5XSeQTLi1TM8PNpUyqJ3xdoY2FL1QMtyRQaFoBUofYWmCFrqa2",
  "key11": "2WmPAyoVN3orBZYPzpEGykL58zSoLJ1AJ6UGjTTNcQtPUm2G17qCqcT9W8BPUk1YG95s8aKTspn5CLS9Xk6Fzbj6",
  "key12": "2dWUbMood7zz1HiNMnbDpaEUEcqCqs8wxHb5i2cp5QRzbSshGgsd2mEvt4wJvaG9xPaJm8REbBENQAfwqNasxX6Q",
  "key13": "PXYPxyHcJdkvnWVsM3sExvXo43ubMYtKDb82cbr5J5q8emUKv5AjMRPw1CTGpwfgmdELTufxSV4E1HEfkKbTKgg",
  "key14": "43JmmDDLoqueF9uwdJKxdL4U9oBRA8B9ubbY5BoosB3Y2EFzkVmHwLLUoWNzHSmAYC5snUVfEkNsPVUsRHgRPPJC",
  "key15": "4Debm92cHSM2RaqxJaQMno34qM2ns6NPiUM19TiwE4WMDvtAouXdhed5Qxnf5LpjEu5tdE7q3NuM2oz7hTH1mnaa",
  "key16": "4Ufh1G4o8puCHRYkvwMukCKPV5538hpfSDiGCtUAiekrt8iM6msscZxW1ynhnoLRYMWFmiTjHECDNb6b3BruBeq5",
  "key17": "TSCwj6Mf64FEL4wqhfsCcYLhvtCdTFzmkupr5ikzYb8ff8F9XHH2DHrjbUtvMA2mptzDzAqTMJQBcbVR9Rnfbhe",
  "key18": "iNJyKv425e3ZsYbB54cFj1wQ7ke4PqRHiegY8AmTd8TXnh4o2JFz2tvVy1Vma8haRomeBNUXCvjm3QeRRADUpcn",
  "key19": "b3xmkCF7QbKzHeu4k9rryVqWS9Sp3b2xB6hnSHvdRCMTWnZrK13cSjMWJiCdSAhDGTLhgc4hrvEHnJxZHW78XtR",
  "key20": "5D5BXDHzEEXJFjdJEW6CbJ7cpA9jAPQh6KYU7FPzAXrddUhBY9RRLjHL7XuDpYYDQ5qAkTqKSoKs4Qthhnv7r2HJ",
  "key21": "51xr7xsJdk7C4nMXf9Xuo2cSViHeFJshu1nLwZgTeoAyamYSfxVH3eoTteHsg9pZjMZcwgzGN1m2vFpbjvHkzvEn",
  "key22": "5Ev4GL2rp16i5eTbhdzzenVcV4iyBRvch65N91iLeXhJ7zzLtirY9CydEx82Kmd94uvwcU8hFThyE5oVWqfX1Jj4",
  "key23": "U5u2NdWRggf5tWjUVP6Y2kLHKY9yWdra1qVnTP3jtgrEmX7s7KMKaaQCg12Gps8cwz48oP5wjWzkCVCRWNeBWUu",
  "key24": "5v5HyMqvzF38JgmTkiNgtuuAd8QynDKk5mhPqqBTVp9s7XwW6r4SqW6wCRPN5woFx6NJ4DHjqnywyt9gnPGxzJDx",
  "key25": "2B3iwgyQgFAEgtPaADSYTdTJD3eUKBb2HFqJfQrD5tX6MJVMsYcEdwKQuJ26FtovvTdwSiQqeeGsqE73sVwAapHp",
  "key26": "2qkmAs5Vs6pEhGL6ntWPWTNFmx2rEgKPGKnYYAZywbAVxWTs2Zr36dbVi55VTF6bPm4NXUxGjqHSQBzdno6SFWvo",
  "key27": "vi83QHL8Y7jD1fRjC25HdiqvywkW3GVBwZ8oqyN5DCLxCP6VeNPkxx9jyq4yatseYQa5LZd6nvJXthK2BMvnDKM",
  "key28": "3YRqSGiMbdschNTfoKtqWw5CoGYufFEsuRpFP5vn3cg66CsxaFQUZ7JuhwtsCpLe87xTsgkUWNbEaaLtahGdJVQ",
  "key29": "37buwMMhyQ7ctgK1fK1qktFKB8JUnRE3G2weyNByaKhcPMwLzW1D2mHyuMouP7YEp1EW3HubmTTnUzHP8Cok2YUV",
  "key30": "5VxPuQznwJiqTEnHtM6meAucNaoKaop1BZLT9p4G7hthBTLH63WWfaUmxW2sMZnHUiWkcc7oe93Cc2FJDc1zks2c",
  "key31": "3c3HKrhQuu7nwZDVjTBud5zKiXCMEwSHSARc2EKrPKARqjhy1BfwsSYREYi89enxWR9K3vBnJyKfVoaqyKap947E",
  "key32": "2K5UH9H6EHF3YgXwFfNP3tTNSQS7nDnzt56oyvczENCCt1nAhJ6kKKqWkt13xXPGa7Gs3hgfzqRNCJF2iNtuwSe6",
  "key33": "4MQmAHwh4rVjbK21PLBY4NxRdyYDpQHBxq2d8n72v1nXEaT2xNbusTcVaykdK3zogPG2GXHxhLAv89arN4uxaSkP",
  "key34": "2HHwhkCUjbSs8dQQ2cubANskwyQeUaXAzSHU1Hfb5FCLpPAcZExwDC7LXhSgedVAGGSsHhjnEVdJvYDQtXL9QV9V",
  "key35": "3ja6W5TY9zTqGjL1ZtG5wzpp4kuitVsEFA2cyARkE28mSwFbRd1JMYP2mJCVd8Xf7uogREfvseK1wQQLhhrSzQEZ",
  "key36": "2t7vD4YqkebuTa1eLmRdbaMCNEba1eg2NAT9ZJzwpLbdtMvnVmcG8AsZbTEzUeh4epKpimvbTtFibBCoVUdnMb1N",
  "key37": "4W6UkFQ74njAkRSmaMzEFuncNuicmsw3GfUWCmkiNpY83gzSuXjQySYRmoENqoJRpEeyrhozsaDUiAih95gFq1te",
  "key38": "2BvgGMRUxU4AU7XkazdRUS5s13j9jn8J3f26eDi6ftbYMvQrJyGwANG7kxYC8MxLnB3UbEUTyCtrQATxmXNbWyZ",
  "key39": "2Kxm2aFd5eQVR3HZsb8i7HkSFbZuEXtsVKaueg1VaLhLyn1gQJfzsi1ut2nxRk7Av3qzwEGReXsXHrffAEcs8hsT",
  "key40": "z8eu3etJQifYV5pztE7meTpYkhhcjDHQ65qixbJBragtY83jqvZUXkmKjSJ6Xwtqw5rS5HYG2LreAttJBPx9s24",
  "key41": "dJCEjgK8gcehDJfj2e6LTgEisipk746NAcEdTMoAnr2RoTV5WrdagsCbrKeaKGn1rRG575prR8iq9QT6RnGmobF",
  "key42": "5B4Bu87MsBcXmm28SUEPDEg16HFh8GDJfPWqv3qDCoySGinSBcr643pnsg5uZdDsiYGqWgQceNSL5hQCb7BUmAn8"
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
