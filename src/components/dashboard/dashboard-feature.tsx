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
    "3grfq36uUXof9NGbWa9LvjLkub5mkHN3B5cM6xC3SPZBcjmn8a5hrTaVnFhYQAMTDsX14tt23s5Fuwrdc13GVxfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nsMeTbaT8MjFRvEmEHBJTDnxCcVqstmTviLFjUn62k9HJh8PocBreGRRcGsDT4TWggEdbmB6YH3fbM9Wu5DQgKQ",
  "key1": "2wEtJJ8qRgmCdrmt9dYoexmGnrngfqHGXnvtt7Gx1tDXAkLUSVkDqtwWxq3DZVbeCCi6HdPeF58k3MAczYMpNHCM",
  "key2": "3VBk6U4u6dWkMAdYcNAT62b7mF7Sx7AhCGmDDB8yxY8DX272o25LDhjYaqGpqimNjgNtX4pLGqDFJ4cyc1oZjWT2",
  "key3": "2612dWBrVhc52VA66aJ9vfRXhp1n8gsp7RhcXwUZ1vbWgNCWhtts1vk9o13W8WhQngfqAAvjvQxKSsdXSbRdEkhq",
  "key4": "3jQjgGApoMZj5TkFWtacNnU5JakrP4EmN3Zgx3TSfZtLyeickh7nUiffYrYBe8K654TWFR6XogcJJawDd2RcM7AK",
  "key5": "4gCkpNC7SZkyiPrpx5QY8ex1MfbBdxRxsw2huVPD3sV9DTWbxTPnXzndExTEjeDcrgAQUQteh5D3bTGqGJnpSH9d",
  "key6": "3QPiw7ESZwcPxzP2tv4fep2Lb8auYvVEFDnbMKnLPuCyWd2LPauEE2Mf8qxKBhJeZtan2bNYVQrXE1QhPcNDj7gV",
  "key7": "3ofNubsM6mX6Kqgu4NDQWW6jCJjjFuqNcYMbDNxmFSE8ZRqBnWG4jUXDthxixt9xPZoU7WTzpgcbmLpmUBuoPDor",
  "key8": "3DXUAXnwF1ssoAuZAKupZLCsmef64NjRjFu6XeSnMsUsz3JJbSACmWLG7Y3z1Vu5hbXCPfco9Hkyr2gamdDqsHkS",
  "key9": "7VnF5jr43YCFGxkUzRY5x7oUYjyuajnavNT6DjvwPqPM4ymZyf5Bp3qnbSjT7xsyYZAeAse95EMUaycTux1m4t8",
  "key10": "5Vp4ZJ6EMPqfXWD4i6ykVYHj1gEsg9jHUcQsAyZBHdERY1wujGFQDjHbGW7GH3tPVvkUKM4zrjEZyoKwthG2azSY",
  "key11": "4nr4AZF6GrskhcjHKDuCenHbFY38pUEnDfCsmy4qXtMV7ad5m6MPD8bj8csbwVzpPLBqBmK356ABiTQj243PU3mt",
  "key12": "d5HNek5VyjwBMhgRiYYnfb1TDREiTrMP8jhyC3PptGtBZgPaYZSUVAmzftHyryp9TiDMVdQsM7QFXsE5rPGFWgB",
  "key13": "2LQ9yuw7cF3QFkVXaLLD4i6NrARZ1XoyvmJBs6U19LMvycfaNC3pjFVgk92CYYoa1B4M9VcbxAr1rrNcPwMBMGo1",
  "key14": "4kxoBKSk1cRpjSqjwt7nB3kGAKWfC8efeQvzvZFw54ML3BxeHfmnaRbWCpmcKp4hgKnXbtkmVfejhUbBTdyZA7Ui",
  "key15": "4YuxBJAVihg41Jfbmj76T5EoEvnW1yJXzXzfdQPbNTLmYgtrD41pxs56zqxVZMv9A5CM5SsWqhpa8TxRzBVJnH4o",
  "key16": "2Ng4GvxxsoxmJeLB6VA25e95fPyCvXGztZgGsgXfdm7KQcYBHRqpGRokCPDBNbeRTCL4MGdceQYgyWkdtHbknu1h",
  "key17": "53EMQCXgZJ92cjm47BdqXmyxb6LZyHGhmPJaZvKKX6tQK8QbGdJNaNmi7i78AbULYu23dEuzPRtu32usdtsFXYAY",
  "key18": "2w3MjjDBd1WeQkZ4FM6VnvdvpgPxzTb5Nr5Pe6jSNNzDYHXW6n8Zo7ec7gY3sDryU72Hg3oqX1VNL5TZUkpGumwX",
  "key19": "3Yh5TitwcdM39aK4sZKvcQT2Nz2XB9NCdh1BYUyy4ZD18VicAhRMtQ3X3DCvGegJu7tb5qTobrxqBDDXtMzcPdN7",
  "key20": "3QPDLwMT4KVYErzzCY2MvRRMi2FUgZA8oapXaNtDpLB5kEab6ab4Epp4vF5jWYgj3nAXaCKm3VK1ATDLSvZD5iD5",
  "key21": "3fHasZ7mwWhDgy38kDGtQxG92pagamHiSkkZUMuVTRWHYf2fhBTbp1ah36NQG415tzabDMjiNyw8X2vvu6CR8WGQ",
  "key22": "mvXe16kkT6VEQ64g1dx1fw6D1PH43VZ4GDgTYnCHCdyjaeCvRFE3KV2tDu6ut82Fwrh95dhMsLC3X3QNsBzbCFP",
  "key23": "86FsJczrwXyRMtXDzmBMjW84g7bgrxx2y1Hs4PTT9yXS4fJ1A8u8zZZcQvDY73sPveAF2BVi8E7rrZrASfebdwb",
  "key24": "5s82Qqu7nHsptxuEMrfNUstV2hA6aFiEdxbW7YJzYEaJuEDyRSCKXTfWvEdtjsMKCGvPCMBxbyadXENQyqjAdLBe",
  "key25": "4Bc4Ykf2vYZtYBz2GkptgEdFdbo8Kt6DiqpydxyikuVJHNq4avzHN14eBEKJhTunK5gAAucvsKTawVpQgagYMybe",
  "key26": "5Wxz8YxKb8Agjw4P4atAXctK5wfxkFj7ZCHbqLFtbZXcrHoVCR7DXKhBp81NSFGmJbrtt8HxTmvi9YLm7Q8cQ57A",
  "key27": "4VRiVCgsRiGnHJxBNHnzFQJevruJJT5SQUDrVSx6fJwW1VBqhAnnjQ9NPbQhX1J3WBmseWsqq1irBAVswAU4b2Qn",
  "key28": "rnmzFBpDQHLDg8c2gxPYoNDGVCq7w6Z8Hf8rva4XACFgjVEHqJW8SzpnimLBSZahjX3QNPjucUsa4ZEEFFBLLyv",
  "key29": "iF9zEwF31jNZqF6BTEJCt5yd1D2Ak4gKpTaTvhNPm72TEyDAWGuhHVy77NYrXPtuiLpr3WBrjb1E3EvadQkSAQh",
  "key30": "x7cPSMPtkLBeKaxSHukt6N49zY5xrvy48ihzZEGteQHT9jv9Xi7xWHxpW6sSLz2y92debz3j33jWxEuwUA8dQ5n",
  "key31": "2ZpeaSaBvygd3uEYtCb5MPSRW9bZMvAqAPKpGRXpfMPuu2Pbg2SUNhRrMXN5J8n2DLQL5xvh1WcUhcoA36QERWiP",
  "key32": "4qFpFh7wbvMN4KaJxdvNF5qRsuJWDkZUZu6z498KJxwS3yQqt5cGxwRQJrrJT4WY79ZqratioZSDCN4YMpF6Pyp7",
  "key33": "3FMRsBardDjFvzwCw6yB2xq6uB9FDVCbdwp4eShxwVQ8HdJEDJf9Hx1Vy5xKCTT3K9jzVf7LhMKk3rLkPFgRD25L",
  "key34": "48o49F6acJZq2Ug4nimjsTtLw2ZdBfeue3PpqRCwtfaXkmpp9VjDdZ5gCZyFzULvfk5qxt9rXDTTXUoo54e8uMDB",
  "key35": "4R85e3rdZxuug2faghj4VrMYJUvMTGjTB75h4oMCbMoCUJKamv5dcdgxCMz9hrCcryy3MP1pQes54pM1ZvA3VbZV",
  "key36": "31MR6nHT3KN9GXcdB2Zu6oQ2ygrDUgwz743ewMK2ZkYTmVSo3QpCRkfD4uL46LDVMpBwxJ5GoL6jA9Mzb9JgoB1T",
  "key37": "5sNPAkwG1hcqjWi2eQMBcNx8JNkJPuDsTJN2JB4SpHP9hgHXeaLg3viodkPaEAJvpKvw1j9ZdHK2HQUXUFcfnqW9",
  "key38": "45Lek4Ln9Tmtb1deCjdiwRTuDLU52FGVaTM3SfCvXBVJDSbyReRBAfYnjp1LfdD8xVNnqMcCgaN1rNmxjaDinWrf",
  "key39": "4BFVznsURZZ32VW9TyjQ1oKYjnDRKSwiVLkrhJ2PzMgjGkRfXA7HECYAyuwKrjn33XSxbyyVZeFyqXTM1VXvBpDL",
  "key40": "3ik2Ta1t5hswFAXJ5fjsHXTab7q4TGP9zPdqxS6jpZjoWao8Eb2vQxABxvE95stu7VMXZjptqnDBgHE8UPpzcgH4",
  "key41": "26qTh9HpvX1E57ZwLP1Xc8Y6Fez1jvJRNYtKDB9vZQa6wLfdtZM6mivNMJVHdn1jYo6PzoZrsXiV5Zn9psrc3gcZ"
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
