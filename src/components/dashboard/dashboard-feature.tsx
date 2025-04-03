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
    "5pWiuAicd5zDzfY6WYxbAHLSZcBJ6uzXdoQG2RvLnf5jUYvxqK29wQDrPwNAchVHJPPcz1bjDhJNCdddthk38mZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3szZ7Ci2yKD4pxX1vDQM5WJX9mKRbiwWZQkeu219h6s1XQYiNRGjKb7LxvbCACSNmsCKSYifVq9kPK37ma7Muqkv",
  "key1": "4ZRRxp2rp289trmk7NRMvfDBx7xrEuUExLUN6kfgBwYRVHU64RDzHUADKgxB1i87i5U8N75nsS7quuxvs3xn1qzd",
  "key2": "HwKVjpCcdR8YF6Cw6PYkGLPCi8GDAc7unYi6Ggo5VqFs221aTXyZaVnaPybQq44QcVFgnXnaycrXrb1NLDDNgHN",
  "key3": "4TFqfpdcPQHHZfmN9tbdtiWNmgyE5ihPcCj3Z2JEWk9muH9D319uMQJTCYpsn8gEUQbKpo6ZX7Z2kK8S1mB16SDn",
  "key4": "4U7YsQVcJPQUihkxSdyrkdHUeeNjbB2uiTFgbXVG6H4SCxWQhkLw5rFTPvNurJmRbRr83ckQej1tcv2AmXuuwbP6",
  "key5": "24iyyoXBe7vRwrjqatXcud14MdxZ3gxDKiFBtGejT6YXYqTHxVeZPXdMKKbhietuk8pe9ZQxPRFYo9VPEGSPPR6Z",
  "key6": "2fsZRoV9o5tncYjQ8ip6FazCnvk1Vzv3bow6ye36FxwLYTdS6JbedMM8V6HcnWc2i8TtiuYd6fRs3363Yb3pVAHC",
  "key7": "UAETQioXiur3HqSW4QwGYEMJJYng6KZyEhwQ7DykAC4XXXQDX6YuvCpZ45mLqZ2gYwZC6aRJDAob93L3NcRHQu4",
  "key8": "2viWN4T5X2B44zrdocpmvatXAK6HEoAErfYxZGAp1g1CSvDmS8dqqvLvuSfsXUDrK4vL7yRkRQkMZYwhwwN4AeqR",
  "key9": "4E75jinANSTuRKH3F4R5eacw3TjV62t3owsCxs2w1UJ8MhZGnhYDQhTBZpzJAHPWqgbG7ewVesmQm1RNZgiFbu9Z",
  "key10": "NdKxq9ZWrgwAdJDZ5Gmh7CfwoUP9x7RHuopmr3fzKBwVTF5zui591SEzpaibksvKzNs8frXp64t5yEe8mE8Fzmk",
  "key11": "4DUwCcefB5Yu9jFCsV7mv4hgbUY51XNPK5C2sYg3pWDJ5ZHLL7jAtuQwjFLsZ9eapnrcpUoJxrgXTnUYHymwYMhX",
  "key12": "3pvMHkqgf1Dcs3VRGcBiLdQN18BkBpMHD7zCdCu6rJfjKzqRKjPaeDoaskeNuRHDkRGG8RCHeCKLuZFpPYVAY7Ra",
  "key13": "65S3zFxRujUT5Dgxwyj73g74m54tM2K6uVjmR7LQpBD8yVcMW4HzigxFKkr3bu1yuknb8SunamfWknKZBc2yto6b",
  "key14": "5QsJtTnbGgKdywPGjRJykCupM9qGagsPE36N3tcTfxZfmbLUHWFEB4YMdX4bGcmRMrkVyACLtXHQixiymYLMZd8L",
  "key15": "5DdxeugPGVoqUfXZhmHufri8KZ98d8NxK5a6EYa5SH4obnTnZ5qnsc7ouhTNnjAnZbvpA2exWNTmrGdpbo7JAyzB",
  "key16": "4buXQNuiQ36iMhefMDiojFJE81BP5n3mchZpajuE4Bowqx5VJh4axHVBDNqVRRqVQc8T7q6HS2dFcjiBjAoE6DY1",
  "key17": "5RAH85hTfEVpywbTAiCqf5ZVXsX1g2rP8SgCKEhdt8UPBTr4N1BMuu7tJQNwcXS4M7rTJiJeUwVgUGpJC1y5jCxm",
  "key18": "2DbTkxCGpv1tsi6W5TQsoxHtARbRXBkGtZYVmQ8vAobviZi3qs9vi6Hx3b5nbKhGH5ZqQ1DTrb6fsW9ogJXeg4Au",
  "key19": "9H58sT8fs2WyzQu6nef1xWDpjndLyUgyZ3FEwoix2rmLd5GLSjc6GAhdQSLogTzP6xTbtBa4zGE6Q4eKfBdZY8e",
  "key20": "3e5tWBB1FVL1aNBNjMPsGqDLvFEwdbUA6KeVbakYMUMhwtZnQ66UU2qTiVBrDF52v7C8ipRyFTxNbdZMDg1KM1Aq",
  "key21": "2pYVQq14oPQ6bAgZAbyFG8eekZCtTBRid8Nf4zenXFDUwtNsy5J97yFJJqsMqMp7Xp6YrTjPaHcT15PKH7g9v9gj",
  "key22": "23KZJWUkxSCu5iR4r2Bei1qaDsQuBXZ5CNm7PLKXuL8ngmj6Y6up4jWjbg4mtXPqLXF8qrCP9GfobqY6Q7HTdDrV",
  "key23": "3q5LBAeLnQebSVBtGbxp1Uvu9C6uTJC19dmpXGMwr6FWioooM4eMkvSWDL2FkiQuJ8KnJkCKFZLcTMBQYkYPYZVC",
  "key24": "4vNpEMZngH3fcPfCc2wPf32LUg4qoUCqsnmQANCmnxYZjNKxR4sTTsyUo4Cx1Wzg84pvaVjhAR4jL228XR4tSnxJ"
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
