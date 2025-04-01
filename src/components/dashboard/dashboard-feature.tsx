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
    "38r4u5F4VhAkSZgGYAauB8FQd33hp1tvaWqtfsUKrm3RWPecyPMm2nHJbix2ASpYDTf7uyJeWTUDF9utNLmUdHAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ieFZUGjG7vovXbboe5c2He3iy3D97h92b51HzbwfXzu3tawxzCedRmkypAfbDddYSyKy6fu7Vuq7g6GQJRkpck5",
  "key1": "5zTZph5Gr3HKCX8tcgvPRU31UtMoNdAE5kAo68FroU7E69nrQa64oFgapAh4hQPemFAxuAhUSmHTSnJby1NQswzP",
  "key2": "3jgHwdpUUzNui5gBe8QCytqCej1AvHDWswfXwapftLAcpzXS9tTRwjzaX9VkMwWez8RS5oNZGxuURFMu17fa9xzi",
  "key3": "XKs5QAqPhsBYmDJopCU57h63rZLEqCVRFX8Eredxq2ZVk3ymLpMXKjwdnMr4aByC1ZVLvuQYfVGFG4i67MteBWZ",
  "key4": "2PLeAJDy1BcEfyWdMxKXuKh5x5W6iXbQ3uExHbSHfS8gC6RryNqrgxrs8sQqJvzQJkQ1NTSGGuwnmMiPaTWdcPTi",
  "key5": "31iN6F2TBouiNELzVPEdiKmiyVPVhGdPEREx1JodJn1ZKfRW1e1ZdWQh6LGTvdWuyEXYyS3toJwZhzX5Nnr1J9xn",
  "key6": "2AeLMeuuUTXa4VFw94EGNV59rBfoEGHHAhsbWxkVQraU88tGLHnTBdijTgs7gmRUmLT27Wg1P6TomNd5qc2rSLa7",
  "key7": "5ZHA7fSJBKekLphtKnSwgDdYNq6aWz8yMWCmogRpN127ht5WFSam67fYqTUFHhV7gWG8PkB4XVG3sxnp2duhr2TT",
  "key8": "5AhKvBKvC84ui74sfnoc4YvzaSeuYp41GW3Xk3u7xQc4RKntXG3CsGSM6bUWfMCmXGLBdJ1mL1yQwzXtcQSqgr93",
  "key9": "5edaTQEiiLqUtgUyTHaFkSyXMAKXn8FBcd6jPPqVioAsSBTKbZ535jKm9j6LjZoQWHvHVbrgnvc5Tmox2DaGKTM7",
  "key10": "5U9n9uibrM9nAwvwRnub7RoJ1zNc8bBqKvP5LZhk2E9ZMr882YWXZXJ8vy7CXJqwedBcotX1L8PsYFLpe8GzVmia",
  "key11": "sF8T3HZVnZ3eNEA8XFygRcaF2fAgzfKuiM2Xr3eDCiyuWTntpJVuDpXXRmAsFBKSAN3KkYNTrySjWx3oAVvuMeo",
  "key12": "2oQdRoVbYYLHCFen7H4YT7PNuiVTcWTeJbxfEuS7jjtmN7KGTSYAjnMR2UgNkcKpro8vYwMK28dThwqve3FGFi8r",
  "key13": "2kBQdDUEgbCFbQfQVdnWpZRSezEbRNptjmYQxzVCiJvNMPterkPi3Q4BdBAzhteG36nyzeUyrHudFKBMFaujU7tg",
  "key14": "3uDgLi2V1FJ5fTkahfdxbKqr9jb95NUar72mKXmF4J1SLKAWsfHf9djakU1Gy7Prw3BURf6jbeRoq8Hekzts7eUN",
  "key15": "4fUvFPjT8H67s8XytoV7PEP5MD6hrQmYhxqhrhtPdntsmDbiXrBYgbLRbQmDG55zXvEnc685nWracdSsNYxWAM3q",
  "key16": "2fwVj1pJbHuiRa6RkKNdakt8SkpDdnmNLEz47TZ73YKHNWLsEfiL26Skp9b36ix8xcSbYqHGiM3tPNEvQo3wGxDx",
  "key17": "YkMqCGY17saPKghhWy44SXfeKNSfvz8wfhPUuP559Y5mgD6x1DBeUFUHDS68GRDQz7JDCXJwBPSbZ1pWjbkvYwj",
  "key18": "22oDB9s7biSJDwx7k5m15D18pGw7brtLZM4Y9KwuY2yD52ggfK96bcfwwggrpd5PKXPMfn4dRvvX2dxU2S2f7fxW",
  "key19": "37wBwmQZrHjS2LLXpExzS8XictHxx4hYLP2fCvihjdPxfsSFqEkKn2BpA76QvgCpzH9k2Cr87oCmgqmhFNELwU5Y",
  "key20": "MUWv8hoXUypFacMGWWUY9egtcXW4pswAxvgtUcKFZChYrGnJ52FqwPFAPEDeykHsmzhtffzk1jF8xGeX41bfood",
  "key21": "4zGLWrEFTEMRpsaibnUEnfRWaA73hXAWbBAkg8MoeiyC6pyoNPeY6tkHFxxiVTCUoCDpum37J8AkcVZkvWRAWM9U",
  "key22": "4Hnv5y1jpWFFdwdRtXnexbNprRYM4sWwz52dwL7AHZH7Y5A49ZQ4atzzWwywHkheuySReQmsxTZ2SQjD32y5RncS",
  "key23": "xEmXdmsdTzoSuJgvMEGGnPtUmjbXMTJ8nnbnytyNrTaunmR5LwJHWrfvW4fGv3QYyRrx3xZyABTCksuhHs2X1A4",
  "key24": "2AaW3qFvo27Lu393Do3apSZGDx6dVsbELZThAoUbGSa4cvGYYDsUzRGDdeeLRmL5p448nmfcLPFz8ydnxWGbCrU4",
  "key25": "56XUjKhGND6Scqr9ipHgjbS2S7FGF4NfLrQpjupAdhmBx8j3BWvjRDDAq9JjMLsjaVCFfVAByY3Pre9yXXS2g9pV"
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
