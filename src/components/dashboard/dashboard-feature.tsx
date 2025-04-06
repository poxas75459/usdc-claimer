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
    "3diJ7FpQo28oByzww9T3KTX7Abi8gc3iuiHgSci72vGty6qhjofKByw7r7QwVPSv54LG5DBBYuxwFE8Mt681xN42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yud8a2VgJZ1QRmHySqhaMUZjpGsiu5yDGK49nTmc5SP247gs3auPmLZgkT6CyJvtHCTrCxU1eZ1AhkLKuBHnMV6",
  "key1": "4YXB2eowv2xvqqFn2dKoU7Dic2RL3ngGK4KxuGPc4YTCSJCtV5gTbwTVypStcNT1d5vshG5Qf6VSkw215tkUPH4m",
  "key2": "41A7LQuEmNueatMgc5JW2Uf4NxGeemcKNvkwvrDNfAbeEVKyDkSzWngx3vfceiDhNADM9sB7CZPkKoHejfcgutLd",
  "key3": "1bXzwxPfwf5MNCE4pwqCrfprFCVefojMQiVdEW3qbvPgoNPXWqcQSYTDHoVjCU19ugJzjFNPDQNcCdoyX3SEQxD",
  "key4": "22AExFNuqyEt5pBbqdn7LFcoSgM2YuW9LpshTwWSJvJLUKwYsWLD1S7fCKe8S2A6gn7vqHA8qBmhT8e7c1wp7yEL",
  "key5": "24gPj84St7A7aiKNdiyUiJPAgx77YF5GqPsgLyVegi5DQ2166peRHYCLKmvbefTgzsFC4bp2sK3iNLWYaZrgWXFj",
  "key6": "4GFfc8iSUYZ7cWnogXS3SSkU3Pivwc1Jg8HVyT5BKiVuFG9iaSAcGhTjzt9pBPQwVjCZLghKP6VvKNGVyCtaLLUq",
  "key7": "4e4NieBCGYDb28moP3xqAGrPxFSLx8Waz3aKDHsS6X1UFVgM8rduMFErhsGFYruAHgpwLXK5WGEaR3oPT5XYgsWu",
  "key8": "31bQRrsxyFB3Zqc3BoBG8KfkZrFNXSgDJdwGxogaY5ax6GhcfjU54bLMv1mNse6ndfLeLUW52BuKj14HrX2t2ZdM",
  "key9": "46D1m5jCWmgi1B2qre5osWDpyveWgxrcar7C2A5R8VYbftgWbhk4Ljtog2qEFSijp8JTLfqjofY9adtztij1JRYw",
  "key10": "ELXJ4vAqusyTX2JzPSJcGFeDA6x27k4AWEux3jy6indERzmPer4aLNMPTGYGb5BdjwzY54UuVGTQgY8FzsX7rCd",
  "key11": "4kaNFJYvQH8f2jqcc4aU2dDAZG6KyirqkS5BjGPBJpborqVANUXhCXBRYVeuhgaiK6AhU1yBwDkttnZyTJwCPsSP",
  "key12": "5LGQe7otJUVJTojRZfoFK9kPD7gDguaUuKi3FGjEp5YuYnHynsFgWPNcUoqY2cNpMSWAU26vVhSDWorSQQoycbv3",
  "key13": "3PTvbYdyAhVaUS8GK2a6Ud1ansuCw6QxUuXPC18tBoZ8gbw4Equ8pHwPbCFcXBM9Yg5HdsXSD4dnFfkmtkSrWzL4",
  "key14": "2fqCDCZqV53Zr482n4gjVPgKfVYMc6YJsHC9GozRKJvZuVpiVzB1UDua1EhFC1Q6ur9n2qaABDpWfVHGjCY42Kq4",
  "key15": "4CJ9GmZtQg6MRFKiDRCNtPN8gMbCCNWgr9FfFD7dYdtd6vaoQZFwLWBYksVGdWWbVCmi3XhAMrKhtp3VF2z6JX2Y",
  "key16": "3UhWeJt6ftazsSrs8of76VcDMpuAWpH1gY5xP2oq6KDnpCDKAJh2tzUjvoijuKqEEe5YDdAcikZiScBFo8kbCntt",
  "key17": "3eZizL5A1rovuFLXjbGxx61JtB5BWqPNmV3G5PgGppGLME1mkzS4KCW11V7c8MsPf9HHWT9qoT3pEyzn9VVA21c1",
  "key18": "4UirPkCXWMTLSjBfoWzDqstiqNw9GidjSyKCxejFQu2McyLkjptX3kMYuTK84BEraaiQzJqa8kDwAq491uMcUZcd",
  "key19": "5fvyYS3H66HYTrY4AsgkZnwpJXmf2YYUYqKsjvGBZEJZRrmjcx5ZqjHzC8MuuDM7LxsXXbWBqwTEGKxoGysuCKqP",
  "key20": "22pYd55hHQMwiWLA1zjRFEkRRbrER2AcDy6SBzzZGgNgsJELVEAY6JW5Nsppqw56doxsnrC7jSC1csfvLCmsdwLY",
  "key21": "5u1rTpNgRCPaZXGbLfHPnVWKRa4LadDiA41CUcreyUtWhXL9Uw9JJg6AuY94dj9PVmyjJGQWqFEniJr7MAXBXRtZ",
  "key22": "44MKeKH2PRZv8Fm3qxd1bn54bQTWVdHa6xsmLuyHbPDhpskpcLeEsxAFapGvoq8WT5DteB1D9w7SUsTsac1QRfSV",
  "key23": "56ykF1VqY1L2qTuwjFxmuREWqxje1EeVad1uc2YyvKhU6wEj565kPeVjekkceX5LQwZGJC6cTPhRWbMFbvHhpnRJ",
  "key24": "k12idRgW3wQvMfM8RwEVgmi8VmJuW4NkLwQ1JqvEGUVX2g2FLUmwkUpiJYNPiLi6ciCSCcfZSJFUDLXvEfxNHhk",
  "key25": "XVzUpUjwzDxwToLG6BBRZDVpoFVQv2MU4zy1aaCmRvWq21bTvVpQ6V2iUZBKNrQJfxLcaVgf8wm2wXTt5RKxh7i"
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
