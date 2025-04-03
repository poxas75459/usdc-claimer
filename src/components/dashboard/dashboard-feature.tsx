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
    "4GBBAff5Yk7SGvW4Hs2yWtqBmqe1nPA811kKBBVw4dYbZcr4kAZ6cjhTraSyQG2q4SnNVAPJjrBB2GHfZbqe14rm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TxqrvyyyCZXBKfU47EpJYFbJfa2PcknvJN7kP61XAQfjRHJgun2EV7MJx91W4oc1t3vFWu9k4o2RTehjrV3Vfur",
  "key1": "mCx86F4rhifqAA7e3g8PgGeR572KjLKrPRZS5yMST3utn2d25oTVN54iMNtg6F14wcno9zFGsDGdK8heEVgtwrj",
  "key2": "4QYVKi7JP8bFkeWtryxQwjhA4KGgwbp2ea7zhsq5TQamf1R5tdfjdz1x71aM4YBLesWmYnaXQMj6xUKzL3NHM3Nk",
  "key3": "2eHUndjknQzravsy8FvTT5FLYS8vR5Pcc81NVyP7R2UdsaUeNRo7jCCdnMpJtgFAAx7Q2FFwm2Z7oeYWtRj7hZd6",
  "key4": "62WHDzFkWcPRcY5R2DvXX91fQhFRLhvHTrc6DjZ1KPDe47RJM1r9vHAf25UebhMAro5wSW8JE2XkbcqjdURt9JU8",
  "key5": "2S2bTs1m2SGwuS1q7TT756Jn2v5dQeFXy2qWUZDZukkFjkLCdYnDtFaWz2ZwPgWxemqjvhMMKa8xNzA1xx3Wiih8",
  "key6": "4a7PKxoojieJYzUGLNduUNmDQaW9XHvgbKGkVcQQzRYvdzn8RnuqDVN2qKxKsr8YYEUTXkx6ueiWDmQ9KQARzKJ2",
  "key7": "5g732jqjyVv3damdWm4oUP4FQ2xdPkkPcnXhNFpeADtvHur9ogCnjQH4dXxumCvvSYdNYyBTKyaDdzGUncHvg3b6",
  "key8": "49DNzwgbyTrmMYEZGCxwxH5FYaNXtQxaEPKqfW2k4K87Jf4gmEV9FFBegU1Rx58S1sxaGEpBo28zqpaVz1gjFtJZ",
  "key9": "4BuswU3d5hLbxoTpDHSGAidFKGcem3o3SkCVSh59qcWKFdNNrywiLA6njXSCK1SDnrK7Ta2sRJ5GhrBTm4YndULq",
  "key10": "2g2ChsxrXwdPDRKNMHnVgB8hcDKTzK9jaYKRmcRzp9bL7CmBRkWFoiCRyZye23BJjUaTBnW42pEu2CKhDkMmXFfr",
  "key11": "5uQHgUtA49RNbndEGFjnLJEtR7DT8dikCMKaV94rNz5xj8gv4kJZQGkppY8Qf9b8F5RJZHMb9rMrakcAdhyUi6Fs",
  "key12": "wRpgtfivh6yRAkBKupsPJUCnXBYZt65XXfkpaHVnnKMVKMgUWuDv1YeZQSgMih2ZpQwk6CvWRfa5tCKUTYoTTob",
  "key13": "5wRSxreZLfWmNBnjpaJx1vHra1zuMEpXhR5LD8u8bWATRmyBohz1xSZU9yCeEL8gaK5PNSWjzmD8vzbsho5aqPVJ",
  "key14": "52KK1Mg8dscEkDBs4sDoruTzLjG2hh7chJ2KNxvVdXGAyjEKC8qRzLcnLo2QWtj5og4a3KcqVCiZpD8gu9bZd8xa",
  "key15": "5r2ZWek2rpejWK5vKPUs5tzyQUxqsXygFA3U2A9q11Rboii5PpmDkTBHpaYqx1YbMamUZcZBhbHtMHx2uaTXLiNr",
  "key16": "4pG3E9RJEbZBGb3yh2EEGaDbm3odvVGM7GEA5PZPgWoBMvNaD76rg1pT8n3LAaemEBqZLkTqQLQw7g8nGWiZcxrK",
  "key17": "4enyGuqytWM98aJuPn7p733q8bS5zqmQG5MmQipAVAqL88r5Fwus1Uqd5yNQAd8V4NrfVhG7HhmeJwzUR7y53Lvf",
  "key18": "4ooLY8P9imh88QP92eqvJknEiXtEGYF4gS658Kmvu89peUStbfxF6hWBH7MyuF2qMpMe4ogKrPVF5PtzavSnTFah",
  "key19": "622gfvpM5tZmd3QyU3C96Vo91n53cF3mpkPpcciKKGjmA6W4NLUpHQyL9jhFeAw5PZnUuua4oVU92HuJhjDJjKDn",
  "key20": "5G5ipw5r5wsjZSSXgmtnoq5A4QviC8xbaYc4YYV9V4mRyBe39UNGG4GydcFwDrAEhpgRAbNboSVHD9aAyASpQTpr",
  "key21": "P4a2XQXkE6WXiRuzFyLHDJuafR8Q8qGRqKqKtoAj55T8KY71oWe2LddxBHeC4BEVjr3rE17q7mJy1sYv7z16bFU",
  "key22": "654RHcXepbwKW4Gws1nUReptWy9FfegXK26z6pvdibHqk1keLNwHDjZ8X7yHAVWWddUwtS4B2CRmCpVWYZA1dKqU",
  "key23": "4VqqyKLPcVrHmx8Gp1qKZawe4rGLG63tZYvooVsHezwfJesSK5bBz2sE9AJsHuAVCKtxLA1zJefudFTvNTKv1XQV",
  "key24": "gJKd3H56Xbu86ZCmcjhxJ525iJT1rhJ6PhqTkDNVx22qSCy1mjUfoCWeSFJD419B5hqD7hNvRbsPprjXgEHLeph",
  "key25": "56PQJuwiwWRuwpoXvmYEbAPuhWv8k89FUJnJ5iAYpKeUAGbmH7C6BTzZLvRh3xHWzyCjJQS5hTLvnyJLa2sf3suS",
  "key26": "5v1Ccd7TZU6gTqZ19z7Dk3ktWZkj87L9U1oyz2wwcpSw71DeHxqyuXhFQe8uF1ESdUKbncesAi5txxrucabKj3Gv",
  "key27": "ADQ8xP7tgQmhSB9gsT2whw4JaurrLN3suWxAnaX2FUT5iDnsdsGAxHkYz1bUdFbBMCMn2nZ2vj88UzP5mdhTbSY",
  "key28": "5ap1T9dFHyonomKAMKeBBjjrEWDBRBa5wdEuG3FhzUv3G9R8foqrFTCZbw6UTUYKcwKxS5D4hTtG4fbXbtETRaZa",
  "key29": "Dw7HJGkjQgcLHyVjoce3EzcSJL9BCKyvuhQveq6NSDh2tbidmFppPjSRzJtcAQjbweXDvG98pFKSM6H2H951uxU",
  "key30": "xujQs45dDFiHnKAeDgrXprfmz9sMdhpxc8CAGRF8WXzPUntHEejkZRX1fjEB3d7zXJqkWv8HMA86QNdMZq1Mux5",
  "key31": "5y1NdfVmmvhurvzvrr9BSy2Y9HLaZ2Zx4dEBxTPP6t7H9WoyNzMPhc6y3UB8X9rDj3ryKy47pBuSrPJkuMbkwczR",
  "key32": "5gDKNFnor5de6ucyaH9yqB1JHyLVhuzFuqGD3MQTXiv27TwokYC9jV7noATsFBXYhwz6WRVcKeWghhVxbF1qeT9i",
  "key33": "2AoBZcQufe3A6SVmv5CHo8Jki5Ax7Y2Z4MV4T1dAKSQcrp7Xs4PxpMngiiepNbJD6UuMHyr3WBqMtiX5b1cpGdwm",
  "key34": "61rEvhVkAsGBNQmUSsNS1n5qgdxzEJ9TymzNmLanvYTVCQT9h6VTNBUxQHSqdfW4BJAvM9jZxfZtpeU2paKPEBCp",
  "key35": "3CJ2Eo2VkrS1tVbJCZyH65QLVt1ikZLqtoYeswgwFkaU21UZzAAYPk3c6uNxsEBjzFd5WQJvxCFwHuwcqrYyX7ad",
  "key36": "22NPkGNZ9KvSRL269RVNh1C4E5asRWXoxUGbv5AmLQTSr4ipVSTpKsb46oUpCNG9Fa8aELfRuy1sfJ1jFVpuVviE",
  "key37": "4hX25uDsMGc4BfEpc5BiM7wnGkVLMrycCoJedVax6KBujLFeGZSPWMz5cVENaR525eznBhtJXrMNmqr1Uzv8DnjE",
  "key38": "XGoZTYZb34syEb4gNzJSZQhGCAvVFHFDfEosUkU5Dj9vyiv2jD79MhZY3qZGF36DFjgbN9j8KNCrXZVvRgz9hDN",
  "key39": "3bVToQBoY9aju7rmAXVBRt8jZg3hXR5YWtBhsgHXaGkv8j6yeS3dh1X1Q5sULF24d4H1ZX2gw5yssX5VyCB5qmd3",
  "key40": "38sTLnihbv4um9h73tyaKejQYeQN29WhekoL58pQ4UMFrRsbquoYQZkEunTsqTgL5FQjcjWxzNUWE3iCMcVCFqwe",
  "key41": "3xxKjwestRgcBjEXMh2bxAzXHjV2ETaRB4tL9k6eTnR4V96cq4U36LWhLd7SC9kfoUUEXLC5FpEpcQS5SU14Tpk",
  "key42": "2uqjGYctJp57DBvT9UbVFW3mox9dfkPVpDBgSigVcevqkvBNay1a8R74TeYXYjNR8XzgyUeuPcKRS4Dhaets1bAL"
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
