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
    "2WJHR8n4hCHoyh9RGqb3wE3KbDJMmxKjmSHmu84MPNtMjtdJzczhmvND3WWPPEeRbhDvPkkoS5VydoCv1xiZCFSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cSipmxuSo1ybcFeap3yJD5SjDQcmekGVeYAym5FHA6nmfiMtQVKcrTbetbsbWQJJsdrZhCLhx68SqsLkLED6VuV",
  "key1": "2K6rCRk1cPXBsfQZLbsDHHEV4GDhCs2Bfhv6pZU6m91etpAuMtWb1r4VjRDAv3niC1e5BtVExH1KP134tQACyWuW",
  "key2": "5AoaSwpGyFCiiNG4adrZ3yqit3kRrf4WoYQMP7orrkef3Nk3x5snCWGNZe2Z4M2DxKzryF9k1uVA4k51KuxF3Ria",
  "key3": "4Ekrzwm1959kMUgyycjCTkcKnmS6FK1YJdFeahJJqabwkLHi2bETcbA1Hzk6GPkuX9d2oxWmg5vv8RYCVcCvR55V",
  "key4": "2ALwE3uiMRTnNYdiH2E61nPMYPkofSqTeuFf9MR8rfm5LAvi3fcq816fB4jDeK5YxGJqKm5PgWbqizVPWHuvGb4v",
  "key5": "2DAKcXhhVTbkq1NxwzjNzu4E6RnTGYiShMJWurqYDoGdkBLnJJsrnzUBDo7RSrfek3CQRd93pKhdRTBuTz27XMr6",
  "key6": "fKfyquTpfNqGVazDFvb9DvQ5HrYQ3BLjbWpnGMGStXKQacovPitMMJFu1fvPfW1q8bxs4F7zm3KgZ4fmPw3RkXk",
  "key7": "3dhh8VCk2KhXLR1ghrQdWyL9oicEKmrg8yC4yV53CmjEPmbQfQ1hTbWpHMCCjzi6BsYHhT46TN4uPygU61FbytZK",
  "key8": "4X2qBDmWcdHKo7Savx7b8BzMgQQNXy6snrARYhcJzGQbsqmfYoYyhwnHrMxx4sqs4ShSX2Dfz98Pd76LqE5rUMaR",
  "key9": "4kTnyeeWoDwbp95s2bQaWXCE9WuJnhjkYDNUZDfPXNcb4FKrWDBqmHdVZkoWZK8muZPeoprB4FBXv92hFN7tP4N3",
  "key10": "2pvR9xSUgz8C2mReLLeiXRsV3DwNiVcb9US2UMQKmRaV5abNpUwZLYuuRik32uN6rFMYGRpWqKqyA9bdoDfQRg3P",
  "key11": "2U4Np9vmpTQNq1Qx5hsbDCS3jFEQmDchbFCm2hGp6Qnx5CMmAUy5ZbeZS4PASQdsLb3KbtfBYsgxaTketF31PaH9",
  "key12": "3q9nRTBBvavM1FjU72k4yayT5i5rJ1bFrxm198GtiSyQT2CxsCPqUKa8haji8uyLbEUm3MzT8Etqvw8FP7bx1LXJ",
  "key13": "nVrnxskFiBcqjoTFTxbn9xkf9nYcs42sVthCQ4EwkofZxywq5VgDsvL38UGX7PNDx8VYwCmgPrchUmALnhbsq9j",
  "key14": "TR2LuPg1wNu6ik45jjPHC5ushy5hevafhURz3hpFZFUNYJ4u3SDdEXD8BTvz4ybjqQ9jEBQqo3rRL5VvPYiifDn",
  "key15": "4W6Jhewfv8pQjTpHx4PsTmTmhD4p7YD4Cd7Hn3yD4Sa9untGoUnCGgSAcD1asuZA42d2BLT1ZHa4TyDzNoGuWq5d",
  "key16": "3f4GHtLafC2xQVSWtXKjsi8kTZZdX4efb7kvb63Zxoepp1o7iCy7qFzvAxGeU95PmaPUamaDZwusqncUGEYN6LuS",
  "key17": "5FsAL4fAbW187dGFrqRNJgXo5jA6TgH2x36Lc9X2tfM4kKgwxsR3i5Wou9me3FichDUGvRWX71N7F3crvYwn7W5e",
  "key18": "3WMpWACbEkt5y85kVBEbg9SRVozykdNofQeuUNqsVHdBMAWEHSeUfGe93jKWyEqcSgUGNxUQBMudJUMsaZuEJ38Z",
  "key19": "61Bv9RXfnRpRDoYr71Cf8d6VdMWmbfw6hz5AW9xAq6bM5CBSch2B1PUquuwPFVw6dbo15XMVxvUsnFtyefCktfnP",
  "key20": "4hdp51FMPceatBa9Uishs7b6TBgPJP3BC3nmXRNPMw1s1tPt425XK77abPrSiDAHjL5GyTwiJ53fM4CDE9Csi7ZJ",
  "key21": "5yoP7oCUSRM8vycapFfQPyEcwUMiCLixjBcAuRm1Rg52nTpJUBVgcErXpkCGjVw4troqWNnFuw9n5rdKHcfdMkFE",
  "key22": "5bU6fA6QL79vJyx711Xoeb5UDCsdFhhBzukc7JZjR9NMRzkeETdRc8txuFNR1YAjid2KG2aixGjvqGRZAeJdnyxf",
  "key23": "34DAPv7MMuBKcVWhpxriFNWZtg5mgJ45Gg5uP2VHtUbaWvzELZK7jGMf7KQ1EEf64XXHXBscQAeRS26kiVCZMLxn",
  "key24": "EkC9P86Y5yEYDQtF8QzpxYvgGS6mW5aWTQjjARaET6bLNfTVXdPdT2MagZLPXG1tQBXeWPCEEJrqKZHrBVvxSeq",
  "key25": "3bcownbDwgiVg5WeQ94Eiv5fhFrGCed3jFHoVsbV7ScM6hpMDxGMPiGFNytjLTshdKdFDXoTTR1XRFHMG7UfAZea",
  "key26": "9x5TAdMpCtwsQLjaDmeNsgb4QQqoYEmk6vrdDWDe18vBF1ET5nMuPT6bkNSNBjwiEUC8Jn6rCbyzrQfk73k6cUd",
  "key27": "2fLRmSxZAHuXepzTiH9i8fWStTwEvxCJTQDZxbrmArif18wj6nDA7kuddWfZzNyNaCRR13E8zwLyEqeSucAMoC4b",
  "key28": "4uydW6n4CUsp4utyDuwPDcePfi7SkcvmK8Z1Av59wsp74xtycReHstMeYGVBtCC1ATrN9VNhLqaqLLTQDWtmN3eR",
  "key29": "4w8beJrZ2BknyijWhLNVkWvU7eZuYCxERUEYM9yy5PBsLsG7fK1iyk2uBQrnywXvyhS91gbciw8Hrj4Mes9yyHXt",
  "key30": "2djsBHiQ9dSmBqxPEDk3BpQ7rBDXSmfwPeK6fgWyLmD6FC5wVe7nnSN7auNLEjQtmKLSbeoUtrotrsrJgd46dpTu",
  "key31": "2MEk5uhPnS7Aa9meQNVMXkD1xThkinnXxfZGkpZRgpXAyxdDNk9kfS7MBb63ifeabpzrPEMEjK1A1waskpJ8sjz5",
  "key32": "5nRVbmrHQVaXEiCy42upqvxV1RRCVSt7DyB9K875bo4Muyd9STV27vQvQQBc9GxMHkbZm8EQJ4kqyWUYyxKKBYYS",
  "key33": "2mx2kVicsW2dF2U3X9V7jpPntBjkw2LWCctHtz9z67iQWjV1XREdm6xQx6EkAQYYvSv2TLp7ZvonkcuCwpAixMtH",
  "key34": "UPAZ4Mx8KjtYuAD9Q7U9wJphs1azTSJKnSkbUn27fRr4XiJJV7YB2EWwkYcx4XFMsn2ziRu7S6vMG6UCgjN6tFm",
  "key35": "2D8XiiPJmcJNwPdVeWqVa89YNn9BpxdtW8tZSut4tLCLzjjk3CTqqNdMqhghhYHAf2FBtgedDagafPGccdutwUg",
  "key36": "rVLYG5JiAk9h8T2x38NzzyddsJ69TNxA3wMd8ABgFRVJNjwm3m9vyYedLuK1Tgx6Bwr9MCD4x72GikPeAUNeG9A",
  "key37": "221eXGzFQQBVmeV3psGLEsgtcUXE5mZqcwxYtEXCZZqeHE45GHp2QHmyqKqr6vhSQ5wcrReyAsAXCptwPYguCfXS",
  "key38": "oGE5eR382uvFGVZsJYpLXSeiRcUHW8aTtDswgx7LWqgTkgPSA6sH5Bk8EAHnSjgqKRuATeieG8Be8QLx1sXssAM",
  "key39": "3BTkr9GTVwnS9JS4nxuCFj3tABU6YyJqKCZsxkaNyvNJ5JFYgD7igbodicZhmzo7ypfNL9PrH4d5VFCKjGnBaigS",
  "key40": "5VQfb8ExnoPBQDWpZB9uEAKqUMoDyA5zhxW6HiFh1YZgwdhBFFG7gyTiy6Jj9ZvT8zydGAeMfx5VL5uSfar6RkJR",
  "key41": "3cu3te12i8TEiy8pYxXLWK72GpLgvmQ6x9aAurDySJjZaxGzjkVK1UoGUBJQzQa9QnFUkS8gQx8FXEH6Zg4jUwZU",
  "key42": "318azotxkTSBS8QEfJaGqAAaVScYRQ8VHwqCLTA9gKbPfEoB5sYqUvTA8Sd2CoKgVtAj8giN6XD3KkY4S2pgLGKe",
  "key43": "2YjkuYMnqGRgZ2tFtkhYihX3mA3F29F9arJYxprhHu3aGMiZHqBDznceS5MyL7VqLyuevKvmchZ5CWyGfzZ4GmDx",
  "key44": "3dR3nivFtjVbEtZyVhKooewftYKrgAeCUbMvRsgCJAyiFtazfZaCzsouQdC4wQ3xJssS8ZnTj15wEpAS8URGbZGw",
  "key45": "32V4MGxjrqVqAevuaT4WB4uc64mqVwoiudxLvoULcVoYZWGfmuggpaUC8zuZTud1Nfxo3J7MAYse3QwCDzE2sTHA",
  "key46": "5gCUWRXpBYrZcUo3pXcUANzgcNZ4MebRvNkw4fZRsT1mXsD5dXqm1yVwRHiUGScsTqRs6u8QQkarLiTGrLsvcfE4",
  "key47": "BtN9uPTjpaqBZjQAUaHtvKRBBeTMU53Q9sd7swpZu7Q1hHLRiWx3GRqMNN9c9MksFu16s5boK9LZ1SLbkFDG4L3",
  "key48": "4BRmkZKtaCgd5wpu5qDNE8qZbVDG93xxRq7Abr2s3Z7Pt1JY6gXjUY2D3LVBat4DLLjRZneMj1cMJst18hkfGXKj",
  "key49": "66DfHKLMUym2kw2fNCKino2sh84hqXFbDeh3GYPnrirzqyQy8Cvx7mRKNGmR7MB1gxweAKrchyhRYJeU6qE9Fz52"
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
