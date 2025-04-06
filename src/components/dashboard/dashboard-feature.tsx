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
    "5dhijisx2N92zghjBozmAZrS9EPMGDYwWjqgeUPr8goEFu7p2MHXYJVwDMr2nAXtKyRUnz5MBRUoxKMig2VQ1FvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "whcvzArqEG7HUxWQ2c6XfKYsbo9YUDsHhRgGU9ppQ1ETvntn8Xy4WStKG5bZ5Tx4gxVmTUW77KcKtr8pAHACpL6",
  "key1": "44JJcCs3PDAZ3KwpY44Nwhm1uN9SNFhmfyDALAdcTxr82T7VeDzBiPRqU98PHvRDiiP2pAaMRWZg2yde5uXUnTfn",
  "key2": "51ASktpGHCRq4bYBEU25M5VrbFQkD6sP5YSRSeYGqVTtmaREpT1hg8S78Atxe1XqXEkApcE1HDE6dkULDcgRQNf9",
  "key3": "QteegX4UyeA1TpbzZcTxDSBDLWnNK52WUs7sdjjFJNuy5m8iFAKaqRRhfQSNoRjtrT9mubuZJuSGiVTeVPhKPhZ",
  "key4": "3J7eNSSXbW9BbLoLy8hJi2EFdAZcJT3mRspYfyGQ88VnCrCaQVHGabYoyYJuv8G3X4J65hQWxZa9FLSAmMd5yXgc",
  "key5": "eoUkhsQLAStRKbuBGAyGnpjFw1mFRa6fcuHFbs3yefyS4VA91QxGC6Gr7aVVb8k1GanycTyYEYN6xhXSWdvoegx",
  "key6": "7eA7Run3SyTF5RvShY27nXx5W5ADMAPCZa7LEbTbDPb2ce9EWD479QR9KHp7g9piWKrgKeSwtFQQj4YGbk6VAJE",
  "key7": "54EhfgvW8bAqD8SqAzD6Yb42BCSaMG2bjmJVWCzdsK9VuKu11ow1PVwABcnJkXh55udWKyM9GFeDiEx4daW9Nvp6",
  "key8": "5qqhfxEHCtP7vpa4jycfau7b1xGtwuvm9NP7msvqEvLUiT4wdAvyaTrzCaxYTbQjPuiaGoHXdrveFQLQp38Hz22R",
  "key9": "5h2KrnGc5sqYuCHSa7V8XzRScLeCqQxnwWKUBBTzdrDvAhkJjmH5aLvFESWPAC5dg2GSB9tEsUNuNdEx2zar4UDJ",
  "key10": "3bc9ZvxSBM5DjxCbyXZPk68foULJiHSmfxByHWhvaGBBrvyL9YxZ4ckJNnuokn5S7BupMtohCZyYdHLEn7dZQW4b",
  "key11": "3JBxSF98vP1stpTd65j4SK3Y9micJmKwzpeYAdsgCnDR11uSc8wiSwhTd59hhAg65xsp2kjNHQrggoJRYHf17wQo",
  "key12": "3nhnWEBSgwDL61NpKGmWT6PMPkvXTSGoGvgmyXjUGwVpqYen69zaeqRmpE6hqpt1GDNFG4iKt2UCnnhDWvuVXPYm",
  "key13": "3eUYF2MdL71vAJGRWHfwhxEQU9jMMRGJCTztKBFmazwrJgDrhsm6hDnza871D1EonAGw6zNATDeiYpv8KZNZBWvX",
  "key14": "5QgrZxTudquEkMK8iodEcnTNBP235k4RksD4HQCm1SMs3PR4txPLLWsqd7m4jR1pf7rqaBNmgHYV4yfJMgMRWHMg",
  "key15": "662jbtPguc6Vevne1gnEACRRzGh6ZQMjMDQpfUNviPCxYLu3ybQcipzCHmgD24uvNjS8M5dYfBgakkSX8nzv4fiR",
  "key16": "5QNbosPajXAcqVGTQdLpzYPfTZ7gYkUUo1Ag38DcYTAGyBU8nPG94N9sS785oQykJWyAuiwFUVCbbZXbYDGQGBna",
  "key17": "5BwhhcZxCurTd1oQq2iFmX3E2JJZ8nT3Sdx9Uu7UGGnQbEMNtQWmX1cPRKzLE4J1SFGbpsaYtETNoqAwVrYidJws",
  "key18": "3h7P9jpZj8P3yJrenbf4QgJkUFdQJ6W8XHmsuGwBNiE755onfyGmGuTqAkdd4GmNfnTFzTPxufFHJQeHkpETS7Em",
  "key19": "7WBstKhxpeZ3k8CXYueDeWnWfpCUztdrgGkrQ5DDHFi43ZTb8wHTe4fcNTdKzhBbCmTWiGxRednoipPo9Y29wpK",
  "key20": "4tCvEN7GrasCtoU2gppfdtEVZhzRNzQRGTpNoL6tzvdkuETsgTtHN8h5hYBfR6oTY3W3JQCipdoABnqtSyS2Ca76",
  "key21": "2qmiYZtEhHJL3Zi7RUh8Nj925qqs5kuG7P7mmMxoKZejrTF9BBx7U2dFCcPKuaMpGoHguB9BizCN6wnpGJMgrfsY",
  "key22": "4F1BL6TqHzB2EQrG6W5DV4oL9Dj246UoZAiJ3szPNtwh4e4HEuMGY2651VgAfpVSyJ7QNdM9V6fifHwR7oFbxMXc",
  "key23": "5VxAwFQuXCcWnSDdapY8WrLp9SLywUNCydeFbdugUc11Qjbhc2kZafwpimBG16uaqrg2dyAf2sgC4UymHkq7TQ4u",
  "key24": "Q8MsKpEs7dhqNoJXVK5nQHaMf2Cc5bnzRNEYCTRxV3cNSe7jrx7SZ9rvUvoe77ysJRd3Dac4o9gCnREoADhV53v",
  "key25": "PUtuiHdAdFPowPLMEjsynh9itDDSMLYgWbijocb7ZkVtYiP4qt4hiQd21qVuVWRNBiMcLYKBtPX8bm4L87waFqB",
  "key26": "2w5nrRi6B2KHvEN1qy3zGTkzux93u7Wcf61YsPmXqw9Ey15R3cATmDunCmzDP4vsKcqRuSwCit9rmgwJ7A5KqsoS",
  "key27": "4tvp3rwUJYPSaYdxDz1qCgiwAQBa5skPvmj1urqGKsAq6Ce37WrqsiHDKX46u7x76Wy5CLTGBn5dJY3o5ND4tivh",
  "key28": "ZXXJESV4PogQx3SWYbzw4uK3WkXHrfqLNHEikvdgeC88Wn1LywUA53d55rtp5NXhPXk77mCYGPsBMNN6mVtrjKC",
  "key29": "4h1HtSPMTTgQ3cNkwKYXzZzPXbiyYaZudL4JKRCuuBeQ4zmqp3aYyPu5wpEEgzuuvsqu2Hhj2MSa2Li31UVNEAn7",
  "key30": "234NgHcdTZL4sPmUJG65VZzthB74x33y6NPvQLWbXkpEHGjjy4184GxEqhaSrppyNLeQYNaaPB5Qme2dfND4D7U6",
  "key31": "qYpzSvGKZscFCwca1fnPPtwBqUuzbgi58ygPMz3hQabngfGcR1h5Vdag6AHWq5QdXzcCLRDnA5RvuVsAiYWqn3Q",
  "key32": "67qWNjJaYFvv53wNLjbnbB9VvmvBhdKMDRBqXZnsY19wX3EQc8h3p9qge2fF6CKn9EKyzxYjEYCygK5qpLo5Z639",
  "key33": "56ApUS2BesrEBDm5CcukwZ2kragXpXquvaHm6UvUpKPiWQUMdkyMmmZJoUJDdwJuu466uN3akbNXkLzZyoA14YQx",
  "key34": "63hD35CcuLAWGidWwNjztaHgswNnshYrAEM2gPPUFJfP2twvJHKvoP3Hwr921bsPfvs7ffXHLphH9wF91WBEZsGn",
  "key35": "5tT1Yc6hjxsTGNz8AQSC3Xg83vfHGxU6JhocGPzjwjPUyVgnPSU5WDK4PEutej87Lp6t4N7Jb1o9tHnnRra9sNZ8",
  "key36": "3CjKPepoxTSFG3UdaMtdTdPdG4wRpLCREAwSRMswZQhK5Lcg9fhD5XL9Z4tq1jpKpECJyXQqk1uY9ndYSkjJyvnT",
  "key37": "5QbViGSi51u8xvNRzoy6aNQvWGb1F8fDDY63vhQ4x2hK32v2WrATUxk2Ksxb6K4gaN4JXvspQ39qLrHZDQvvj5og"
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
