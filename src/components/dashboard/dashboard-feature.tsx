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
    "2ZHbvbDa1KZRrF9LuypJcqtzVu1HNs3GfWok5cUR85bwkc6rerL8b4mrDpdSgxkvib4BdzL4q7WEUrTvSoaT5h8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N7ZrfZsMT7uD7Du3MetF7NQLnwiRokpN8nMddJRNPfD1A3o5utRFj6ucAoZvbFUSmrF8EWhy1CUbVWTtG1qj4kT",
  "key1": "2Jn6zdEqjkoKbTGXXRqc8ekMVEHdQmxnrV3rLYoFL4yakxwFLpiotELtZU8tPBWVZiK6Ame8hBZyBn2QnKUXVcEp",
  "key2": "4qxPCbVi43zoCCmHbA1ggMjbrzj1jgmedXu7mujkbtiXgZt4JrkgNS9MAiCKo5DmgQBxgnwMYf21idJ7ZzeSWVHu",
  "key3": "2bf3AoVp4mzzCJzhHSCzx4QJ6ThvrEq8Fm2efKZoiaKpZrcDH3EHfpXzV6yX2d3N18fpJS1J7wpjzxZVMzkGuFNd",
  "key4": "3LszkrzAZEWJGHzcrq6K4ETyg1ECD1aN4emU4GncDMwxtEuaNZ2UXrggnuqEqqL7NzXVU1VTiUeDLSHAgFAnd3C3",
  "key5": "2KLbLFmwUSNGJzGGdng7D4RprnWQLLFpBFDQTn1adrW7QNAMNNQFhH2WP9yStke6aBNtoGHUrLuqYzwTefrtEkcu",
  "key6": "3nVAyAKXdj7LUSU1snUyYWNdj9tDw1PEjUB7rbwbP1U3dd1a7abSrFLDH8Vcd63pHwPJr1wQaemgiQtdNXzsQPsH",
  "key7": "2iLFq4y4srimUnvKbjGDfvJK5WYYpqNQUNGtQhH84wWnBZKAXkcs1i2p415c4f7RRUSaKT8zWSfn27wuoyMX2C2v",
  "key8": "4P8jgm5BaHP49xqTPyHbCmDGDjkrxywQ3MXGwannLCUhX6xXT1w2GW2CjAv4Z6nfxzHV8TsByTQKrxpRaaE6zE2H",
  "key9": "kNEwcg45kbBnnEkoKtBF9fvsnrAUQQCBFvqZwfZ7VvQUwKTqn9tUzfSbNrPUHcEcEY8SsJjE3J2C1G6MX3YVnRF",
  "key10": "3KRkKNx4XLWnJjZWXD7VpMAoDjiBzGSZatT4aURHkFW1YdUB2PbYEz6Ua4XsbyBPVRuRAY92J9X1gUirT4FRifJg",
  "key11": "48Jt4QHx1ZUT2m2zr458BMzHebM25jsNN6GzT8hrf3wGSmP91YjYBMqzCxG8bb15Dt7CCsP1Da3dPJCXkYf8crdR",
  "key12": "3iUhiay4BLG2yAB5mRtbMJwokQFfGY98VXieWHY311UAWiqYAeEiLjDQYZZ1Vxh88TnP9DKKtJ1aEyHNgiLyiNVT",
  "key13": "2y3YV8XNrMVBN9Km7sS8J4igzq5auK7cpJ2bNAk4WSxSpbWUU1PwxTQ9Sp3LHtVATKqwBSRzbMnQiCFWH8djNSm3",
  "key14": "55dMT6jwVRXZXV5zm4LsQWSieZGJue7gM3GPSpdJHz5LhLarGEDxYxwKDSb2VuM58BJATNW8GwypJKNfM8c1f7Yq",
  "key15": "4BWChm3iN3gZkvNppjeCqFSx2rFwWcPWpGPEm2VZ3WpJixzL17263e7sSVG28N3LU2VkKmsrZQG3fN1aHHWFv3DM",
  "key16": "32BLJL18DwA7Y6chZnEjyfd2WK2RxESLUZ9rut9PGuYpcjLLsmLwnbHbfYJAkBYCJGVYdJtThwJZr9t8rrTdEXxw",
  "key17": "5ZCNPoh363V6AfxKoSPq5Y4LSyWQboz5A7q53GxUcuUMRH48oe5U4aZGYSYmd4aVvk41ZterxAuZQF45KLUV5pBR",
  "key18": "5pRnUF9MK4vyEzuKyos7A9pox8wdRUyLJqvdtGp7U9HVNsYfqMbKX1EfczyFV4UN7FEptU9jgtzygR254W8VL2si",
  "key19": "5nzHyZukqsAoBsK4wEWSMCfGpsZJjz9Ua5gKzTA5ibMfwWUXKvjnyTE5uRGX2eh56xSdeY7SEa7va9wNtkF7agM3",
  "key20": "3D8Wp69eZ8kEeTu7CGM7WsrTokgNdAnQKwWCcEnLzbvNUfUFdSnX1ApATpu7G4YRytCKBLyZdcbKEQgWKczMfc2c",
  "key21": "4wyK9tiS69Eut46XKERwZj2uRpZLLpcrJvGNf4qTeQYxZzUzTGeJfLfXyL8K8SkAuGSiTbEEbr2rup3yjZPianjW",
  "key22": "4vjUUrHCYBymKHsEa3qRvikF6yJtSPHYkib32hbZza7E3AVyXatZ9oc6qM9PvKRQiNgFyDgEg6c8e8qLxScnKgiH",
  "key23": "4NeocmMrt5zmpAuffbJEyHh98bfG2fYWQJvFzCVKLLC8womqGDEALnN8x9atLt6v5cdVpDRcuC4Jx4dSPEmsQYyQ",
  "key24": "2DfDUa2Fa1vCirqwiAt7f8BdZc2M3paFLFBDWex4EGwnUeyKyte5hGatQcPVY9DKpz998pCm5iputEewYYTZjSRF",
  "key25": "4c2MZLgaVqNCRUBAFBcS1ih9c93XfEQ1Lr2s4nwvav6pdakfDnRoKfwdWdNw4Ezq7ftpwnKx1m4bRx9DYjRgdnD5",
  "key26": "37KUzNekv4tKMtaWtgbbTW1n7e5oXkntkFNmdWgdT61gRzqkGsyW2rK7KtjbbSZu6JRw7gy3b5cb8gEQ2Z6nreuJ",
  "key27": "aPW5Ve8xHJNMfjHNAWq8X1YPiK531MGT5LkqRyzzUDRXhv2nfESK6DptNjdkmvnfY4FTfSEUR7ySbciSCecX6w3",
  "key28": "4isG8tg6yR6bWrDksugEjbZEDrHwSqdTCdr5UjWLEjUHSoE3vziQVrQ3xZLDQdeCoUTJAm55gcpQL5hQUZHR2ZgX",
  "key29": "4wP8r5jxrzoy4hAMKpDSaZnjA3tdpx4CLB2Gvk9m9Mg3kyDnvrtkfpoUjv5n9BJtrFTtwYVnHqg1VRdALccFRuXq",
  "key30": "4DTsvYSZ2nKVcCjmXUMbyTANR5E2foWL85L7XaWRXEs94fac4FK7sxVTCRKuNPiDUxbXFkgues5fZP6p2KGmUsSq",
  "key31": "31g2uLHhpnSMxbx9SEGjAvZc69DUKUqsAW3t4jFGqdQZT9DParFbtDm4xpRa5UZFaRki5VGjyXtLfdyTuLmGaJ82",
  "key32": "N71Fe7Bgkd7hAQWzqTU1rkX75UcctcvKrEQp2a7a6AhHC8hJpcXkPtSwCU3itHKQSMhY2qsW17DxMydJVaLE6Na"
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
