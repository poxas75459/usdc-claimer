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
    "5G5PRfwu3ux8aRWMYHAU2oKfby93gVoUtnpuKDzq6bJyCzfBJgm3U7DwnsVQATPFaiUZSFMxfGKrUQTKkTPifwMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "niW63cXWPpQmLZzVcHszU8nEFQrz4XidHDpai4WsdiByHF3TowNH7p2477oHDuRVqhq5Y3z2Er628Uvrw1VRp8r",
  "key1": "2eqVK3GUMvcJXEHZLE9eomcXXV4qj3aLUuCci1YxhK6tKq4yGAjbHpiJG5s92Xezu83YTCSat32Z2EEyqbY4YdUi",
  "key2": "4zrCC3sj1Rcgn9TCQusY7xqdXc9j1Jo9SN862ZzmkE8t2swHrgBGBQCtZf9aExuNFftRzaqE6L2V9f1fot3ep7WB",
  "key3": "2g82Bk6cW2JXCGRdmYQFtF9fNk37jKWuTC1GvkCrSzMpEk1znmry9GCYkN4GZzKDXLprHXQQLhBdh2ofKvmvjyaz",
  "key4": "5C1QLJrEp7bU5N5n3pXowZJmF3o8F9Mxajgi81cq5L8adkJ6hZH6B2qhSbG1rA5YSp2Hgz7v5ZRDCa4pysiizEBN",
  "key5": "15RgGFHGHKkXX1BiuFHhCregqLtMBbSy6CfN72JyWn869oYThDYPYTRfaGk5wrE7XcEGH1oMrZtLd2TZBWxZ7xp",
  "key6": "3PpYfp3GJgAXexZrFTK31PnZ4CCrEShrThwMrq4t9r2m51CM8diJAxogT6E8EoiZ5aDdxTd4YPBMR3xbXx8s6uD6",
  "key7": "4KLATY1s79bzJFxDYZyFrpSbVx2pNMsXMVLCH2GS5i2RaGXq4D3eDfj3uZUybCvrRR1ru7HcgTpnjkvEik8fv2hY",
  "key8": "2PEzdsC1wdoAwaCW7z67jmzWrqwcPLE3WNpfnFmPHJmRs74KEkEo4iD6pH6m9KwpmChCjoS4hCDmxX7f3qbiRYF4",
  "key9": "5jyPaFCdozjoZjL8f5GGx1aznR7Wzrx3M8rPnwTUhVEdXd4bQKmoHspwCb925N7cmaU9cLYePbzaVhCzSKGYjGg3",
  "key10": "qgqLAx9FvqHunTu1D63Koiv1FE9hwXwQWe2PfZ1GYNnVSCvgXRZAUfh5Nnj7e1LDq3oA4FCPqFgWTMrW1fDrBAt",
  "key11": "5EnGGmohYo3oPNQcLTBF46ZDcfDXMkpU12vbf9EFXzQx6W2NDR19XEE7ycHYdw3snCu5cy5vs3ZT1wFFSrJtLwMZ",
  "key12": "4nZYTcN8ZpN8qoasCTQn827hLDZ8h2waJAGdcwk9ia3zk2dD2FeVm3gcGhtUWvdYtvKYoHHv66gsqm5fVs3rKGBQ",
  "key13": "5XLtw2fibrHM1zPuTL5pH4mnc2hbNnK2ymUDev61u1ebevtQm3yvNQrjdyYe9RFjXXokBfrrG2wTGfWds9U8W87U",
  "key14": "5Zfb2nQ73CxPL6jUETH6hBkVNQgxfUrA8g3y93uXiH4d2szkGh43ASmTAKVLVn6EFwfmhkq6nYMu5S4U1zhr3yVh",
  "key15": "3jz67g1irdmuMdGsBoxqnR7HtBYva91acLzuDsuwzkZCdY3dz8Ub7cLfN9ChS3eQqujfEX7AAYNEbkUBjL7N5KEi",
  "key16": "5NPkF4iXDWYLZbrzczQKgYJG8rzcRpb358GFaSZ1Jd8X3Sdujanzfg5wTxez5pL7KtCcz1Q8MLa9Y6PSW6jQnU7m",
  "key17": "5AyUrrbe4VYtGugBwDXabPfy772NkrPcxTUifRWqRJj8ugoYrFoFLLy24ZdzBAtSomydpdbMmJkm6UMXYPesH3F1",
  "key18": "74Ax36NVKahtWeBMGBb4k5QmKv5VPMBHq9BANoF978EG2jiAH1uDMYUhcAMJfq4x5NCNsUmEuXa7e44AwtJRXaG",
  "key19": "4tW4zvFXJXKckD1Yi6H2CwEgxsvWHBU6N5R3w6VGBfXEg24crLngoj4YiRoyDtParQZpvVKKs5sTng6k8LZkMhef",
  "key20": "5T7AczmLqWdFALfa4Z43uwKP8znhDmfgfpvfFgoZxZc4gBPJE2gKKKCZHofgV5WJKVxLUhQ4vKWu9LsXMvNLicEi",
  "key21": "26R8NchJY1RU1u4LHy97hfrCMzjvxgxjMiY79Gzdz4DEFDciSYK9xaNrKJXHfhNJiFTdYMXC6n6D1E5wg2vwouG7",
  "key22": "4i85zMyWQpbanBksxtNBxKBcn76BRQDX2jcStrvm23kFzr2FzDFMTvyUBekAxC8xTjhVgdN4rzB3FcK9zqgTN9vA",
  "key23": "9aJMbMAwo35HaT9ru1GnHR1c8TfrDbGHyRHD73BbW2HaXV8V7G5RjNTgMEYp9Xd2w9qHYwtAWSMENtzTLoPWqDg",
  "key24": "Eysd2Jsq53SK6CocpzPKw47ni14sgPN3CgDTxNDPjKh1tbSpSbHa4oxut2Mg4tqtZcWmUoJifrmYRDaUH5zff1A",
  "key25": "Yet9CZcz6Nq7GkSv6KK3DH8bmj9pGTHp1qkkkh514VbdynRqYDiT6UJQhEcSmurJNPxcYAnMkKp6hA6ck4jVntW",
  "key26": "522Px9kM7r37BHwhbbYJqXnupWazDKK8Muk9w8qiQFQbpMAjA6kCJq7em2crXpG7Bbr6S2skxiWH2BJEYH8mfXiC",
  "key27": "5UgrfLRLDA5TGaSTS5uaKwxQP5n58MiV8Na7A35jXd7yzG7JDcBcc6V3hXKHqBBxZf3QfJvwt5ZuzGYiPWz72YVS",
  "key28": "5svXTdwfNS9HKD6dYRw8En3mhkouhi2KoCgziXPYDGv2uN94QqrKkKPjpDbR89Z4c5WfJ314P8nH4CcwNKD4cZFx",
  "key29": "2ouyvGu4fkiJ29T4StX2WH6ktvFNfyEGExXNRc6csGE26HvjyLm5WJ98KeMk6gNm7GMXmYiswbx1xcmNuG2eDUcc",
  "key30": "5w5Y1x54cXhzDQBgWbPkPSM3md4GS5DcAxumgAzgBA4zwapJSd11Gd5jdZgHxxg96r9nrTcSqDHf4CiyTCSQuBXe",
  "key31": "5vE7SWv2BL84jD2P1oseSp8nvTXeBf1LSQbLN6peFSDs7PFw1QwVVNsDtLhq9pL1Biv3oUtRNUSmep4TRbxhion2",
  "key32": "26NJvMd6A67HeYg11su6boLai7s1JXAseibPVLzSVyAMjMxi2HmgtFsKtb6x5vCVhpjKi4dPwsT3Aetf73NoFTE4",
  "key33": "2ZTwMP6f3ubTdN6Ln9j7thJPc2oCH6P39JssnPeTfzmNNKxpQk2KyeJyu6AKxSfad3C4dnBpWYcogMq8nAE3CMZF",
  "key34": "x2mXBc4efq2ZSqaLdLeb86Wu9A7gfh3gE2iFSSAexMRycNL1N15zAHozZwzfAzFgiD6LU1GaCnp5n4RsTwPscoZ",
  "key35": "2sKtFP9dwpc48Hr7YH1S9t8qKmueTrE7VTywSmQKLrbSvv4YbnnTCeqyE6PU5eheiDg6261wrwBqzCkpvgtVuhZc",
  "key36": "5fEpNVfkVh39hX4FzwM7Bprii7zpV97ezGC3n6a349tWnxEuDzALS4vdCCZ3dk2b4z5o9UCbqaUi2GPN4uReZwvk",
  "key37": "3NxzRPNgYvZxjSb4v7jSvBqyS52i7MRvNFJmreZxU8r1QVfRmDg7QRMvv1yMLUsoRuztkxwbZfGgHt8pNyAKPR3q",
  "key38": "5WQk1W461VV52xCk4CZsKywPZkLfXq8AZLQQ2vApPUf7NH2r3ZhfWV7YZRYFh6EhgLdk53Gw3rFgsTqwJAoyoAaJ",
  "key39": "3MYCbg4QsDLsVdey7RdSFQHzXfcxafTGNEmrg9JdGgy2LDZh1urrsJQnzeNchHBzvm7ws1npXevbuyZbFLWYDu5a"
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
