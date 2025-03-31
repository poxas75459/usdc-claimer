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
    "7csTUyCKqQncYvhfsfnKTC8SraQGge6w4nWrfnUiURomPvMfbZfgBS7XzaHdfP6UQ2C4Hequ2PJTVhR8JbzFzwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DhSQt2Csdt8HrU5RCpwku9bQ2We11uxDX4oqJf3AYRTEYo4FK4fzqtWT6t7CmQweVTQcQmJ9nYvamUSQPBE9J3C",
  "key1": "x1nZ1ArmQ4FL4yLkvf9VRpYAmuUEBA68Q8tHMjn7kytLgsTwCxRL2aJ7WLYFMehbk6EjpuzaqaKyC9kD1k9kYqw",
  "key2": "cSJbWz4p5N2MLBVWBLq5Y79PQnDofMKLnLHREaGAdRzphz7r55MxZjmNRndS33Pji8GcduSRygC1bf16XxmYEkZ",
  "key3": "2z7fq4z71yBQPCQgbxwmTZ3DiY7iMRP5ZECdWi7TUTcyC5Aex64wbp2XJAni6hDgbitW7c4jP8HCYxycHeJokvQp",
  "key4": "2uDWoj2Yegt2iCnsVQsDzJYQ5inLBq7sQaEgS6RpWaP77mEvoeVuNnemPdoPkYSkXhUwtsgBc9SxbQNjjKhLxXQF",
  "key5": "5m4pBes2eHs7XGZ46mWTv2EVzSZinHHqe7o17vYHy64TVnAd9NvjxHrz4fFkMgsATtbSEJ1aqoesUZhEww9qDSiS",
  "key6": "4Yh1k5cnt9bu9WiKwsP2uo9mQ9R8J9axc2UY1FcgEkA2g9KgodA9VN4vzixDgoP6sQ5i85EA4HAtegDUbwHakLFV",
  "key7": "fxaV22RE34ds3y7ZMFAH5hEc4J4Twux1BHgp7Cws1Accvr3t4xHUTivdcmkjM41phadZsEhtCQgkjTKtGSEeWVQ",
  "key8": "4vN9FAh2tpqzz6McoQon9UdC5c9fJ8PbWQbEWF7Fzqo8Ckaxt5dsATNDBp5JdtDrYEHvxU5UAKmsvPqcW3TZDYue",
  "key9": "5xut5USQu7BYyC2PfaEMVJjBfLyiSYZxsnjCnzbabk8W4umHncVCAaJmNJnzqwG1GVJtNnaWUcdSw1NWvrjcfenu",
  "key10": "4mof2v8ZjCH9u4RUFQPooija881AbYfw1PucxofgkDXesvKhpwW93X6W7YLcRfPPTcgMoGvP47fG6DfoHoGw2PW",
  "key11": "2656NZesfEtmR9FckY4iAvHRWMioZEv8ZLpnoH2sj5naYFzAncaH9chDDTQTYT57QpNNbmnnVGpR6Vh7FNPhzLyz",
  "key12": "492btoEDDc8mXxiuUbkH7gRicKNwKgqoyPfAfsb8GPT6pWdaKqJTh9D8ghrw74JdiSQ5RWihEFXcgg2U9jePyUZm",
  "key13": "574EAsRwuESsdumQtf9eBh5KZuAHGujzzsFsohbWXyBEr7U2Xzzt6NXHtJEAzcpwbMnmbkLdQTxhvDPj9DFbVGZ2",
  "key14": "5TyyiXxdBAQhCWyjM82Fw5Th56RnicZrtmbDtrXFrWUnGoC9puPTJZKKKjf5ntWWcni1U1Hesb6frpW1y6Exu2e1",
  "key15": "25ktArZCvck8BTvPmBgiVNPat2StYLSbRkjEdzfPhibyTYHsAECm15Phni4axyBYAakHGui7PXJGQZNB1VHiHMh2",
  "key16": "2NhmcjLRWS9StYTva9bWdaYYNpmsPHQxdTosjH9eD6Vgdjg7uvZDEJV7vwLuuqVhzr6mhr3pGYuiGtGshezDNGBN",
  "key17": "5Ybc1E2mrmU1ZKDUUUNGpap8rZ5SM4uzQNnnAwNn5UscXKPv2UPYY3cVQzfxf95jVQvi3f8LTHe5cqYYEzagaF6N",
  "key18": "33RBDSLkgTuJHYECCbJdHqdTVQwaKGunUBinsRNrTHvN2mH4TfxpY8LZoEu4BtXy71VTWRhXZt83orr1H5xTQogK",
  "key19": "2p3xVNEm36Qa6hJdWcQURqbEeiNVnnQzJ8h2DLy4P2vZQ9usjojRUHfxpm2Y67BaTgxbFJGxb7fRBZQHJtnd7Tvx",
  "key20": "474fcUxER1LMgV2J7J6QzQ3fBHwsDXpAsmcGRqTUHJUYDDmzXTLSM9VNL8hbFupnbbbKZkGsvaV1orksrdtoAVcU",
  "key21": "128pS9Kfd5DWa9guZtHbrq3HA4SRWkc3n1aejJMpjjDxLv8kpvoKbfA7iJ9GHH6TzfD2LYcyFA5Fy4zG2tGbh3Vj",
  "key22": "vydd5H7i6jgB8D31v6K2VHiXZJuN9v9TbTRny44ZsgJbtR3SrCtW2PBtwZM3rMNwn3V9HavGFZXFkWMyHNtw4GG",
  "key23": "5h7g26VdyDBFJygxy3GBXb5jjbui128rcRBKHSgD2xJ4L3KpF1WcmYX2Z3KVSJ6tzdRj4Xz12wLGdqBNitbMYhy4",
  "key24": "48dSBgxr5iChUt1iDnJGqY8x77boaaaNQoyq8ZVRSpE6sLiJ6x8auByyUNWoHfMwGSDoKjrbjNY5fLgVn9Po7SYJ",
  "key25": "h7E8rN7HxqkbHMPqn4vUmzM5DFf28gpc1XhwWcujzro45i7t6c5zCxbs8iamneyzjce3BZDoPPsmTt5YYbrfFmi",
  "key26": "2f2BEksGFrPronnpjTXZRo7EBg3XVDzwUZfbK4L1MruAvnHM6G49v4iJJLgkffkKjXGnVMP3eoRtTycispJJgwQb",
  "key27": "2naiAf9hG3CMjTBUmo4mwahF74RsmTU5wmmTpxSqy4oTV3SynRHYfLAP4zKLUYFyBGfPYiMirL8bqYFBvtf59obs",
  "key28": "49bG8PjTuRZUBcNg4NptqW1ipEiCLYHiMKHFV6QtuFJ2taEwomQUgj7ZVrdGQHHaSTT9nbBMoTnv2SDT2HGF7JSg",
  "key29": "5poQ2wM7i3h37QDpzQREHZztjADpoNrxo3dUG1MrJRZwFNmhPVDSQR4H3B7Vc8K74kCB8YFUm1Wqgs6joMRHTX7E",
  "key30": "2sHG7F7JF9NK5qKYyASkeQV7vrHJScrR3qhQxDiAAQQu2aN5ugyaYDjHg8a521tw4GZ3WkdK1cKjwNvqKMunVP5U",
  "key31": "5i2yuyN999b3zF5Ur8kgejgvcnhSEXHmFPztuG4QEQGPh7BwJDdfbyUN8axuK9zPF3KHvyYW4PYtYkgHHcjVuXBm",
  "key32": "JZN8LTBMiAm5WEtAffZh4iADzZQFX51r1ZCcgCztUSar83eE3jU43Km9GgTwd6NsS4EkRfEdcyNsPQrkrga4YeE",
  "key33": "4tadNnAp2PpqYwDDMCSntXLZKNNLiKmvwNHKs4SDuhpobb1vSmadhTLSBR7UhAwK18XASmzmwKsxLQVjMrKP5ZNM",
  "key34": "64vrAGoyLEhZBMHGbCjX25dZvMzWV3cMekSh2uTtGgUcLav2mMufM2GRGgVXdjT9QJzoCkP2dFHWRfBsGcmem8nm",
  "key35": "5uLMcfiuqnUqVy8cPddhhS41YfTypZ6MgBTJgwmKzrB7PNGXunrwJgK9zzbH7ZjYPdZQDnFTPAi4MtqHaJb4t9UC",
  "key36": "5zsjEpm1kmt2sDakMmfhRnUpwLXdJmorrRDGV85UgK35vMmK5uRGPbctfQTxhG5sYwEg2RBcypoUgEvAoGKB7rF8"
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
