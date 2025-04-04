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
    "5xR9nvVJhrf5g9NNEbX4y3hh8rzMGECkvNS2T1ipmSjyiBLbbZGEskifaT9vr8JbfMkaf2F8a6RcG2wsza6Te6XG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RBChAENkoortnaFQwFd9qpeH5X3B5tYaqUAXLBLJkTpnhn669EA17jyH6aUuA7hchqMLvGpMoPPBv7jVGqEjs2P",
  "key1": "3Whp4211YrCF8xZZFKg9wGp8f15rRsS2yJQpjcFhofUD849ejLELySGdgseNtaPH6VXwUWSAXUhaZuqgVadbfu43",
  "key2": "L8CJuwsM5PRJbgsoTdGpTytvtQm55gY4Ra9GTyuij72L7T3WYN8hjZug5b5txe3DnsLX1TajY4mnstPpNQpKmtb",
  "key3": "hzqbvsvMU2X39g1nrMaz6tCJzNsNdDtphdNaBGfTog5NQBGa1SytNGebVqtzEuH4ZjctJ4UZUj8fSsfguiRJsdg",
  "key4": "5sefZZMTwv3Tj5PxHoVqmHp7STsL23UDhG87NvteGBT6tnpt3FaJVWt13jWykqVznxsqMpnknuLiebx49RX9Mtbw",
  "key5": "4HGz9wL7jiBpNXRmEoiTjQPQvTS8MAmn4BUeEFqLn6XRDsqg8KPcqhPi3fb3JmzD1puktCNkVCnWcviXTDyrPUn8",
  "key6": "2ZazidMQBepxAYgSd6owxvKvNT9QLGcM7akoMjPNGa94cu7faRtMNS1tUS7yRoBQQKcjS2gzwSJp1hkBN4dfsKn6",
  "key7": "3wkL618f5ETRGTMfj3bLN7mXSjUvBxPXnoqfJDPppQzf425GkEP2aGL4rWSSh98iBWLp8nDJKoeQ29y2HwhprYDF",
  "key8": "5T5uKbX78t8oC5NiyDokqh5Z4VpTM4ZCsDtVkQXxuYrng5mGBxTYKVtjiA25V8p8YSKSYPjobXrvKGs2auVwHqNe",
  "key9": "KaBaKq6k6be2tWDGRS4bntKS47bWETD9T8fnVEVbhdq1PZ2CE5PbeMT7MZVWBpvHiAgaXkoWPMrtB84MWEkLomW",
  "key10": "gAbrFzDCdCoCzQ3K2PkJujtDcP959mY52ZqyHp6rJMoMDvXftn663CACX6kpX1Y8x2EXAKsN5NnLx36BckeKPzv",
  "key11": "5TqiPGAqYAkwH1w7ymRvAWQ3bunQ8eerwjFCMLnVkycbKV7hqLvgH5beV8ofFxXUpQwc8yD42dLbvqWXYrg7WGZP",
  "key12": "5mKgnCW8pmgTA9ngtuPM2X3drfoQzc3VuKibr6GmdhNKmwzxMN6sm7sZapAbKXdF7PcQJhpUW1tCqQR5gtCcsuCu",
  "key13": "29aYSQhQDWDexFCRfrz98Baa78ddG8jP9Cqz7SuxkqV9KL1LGE8GWpaLeTkEXPKSo2qzqBrSAhhARGPW3geJKnN4",
  "key14": "G2T8mG9hBdU8zb8wS46kYArLhikXaoYYvYuEhnTFjwkJhrmdmiRJyLYsToeZuvfMS63ZbtqeucvuqXH6yzvqmAY",
  "key15": "W31eDeVAD7vNhnPKb1oxTArch6S5TEPD7mALn6t8D6ChWBZyb8fBZGZMtPHNwYYTqKyhNLRRa75e2vMLazi2KPC",
  "key16": "5rYdFML5St21X1psdnk7g3xnoGY6DiFHXcXEKp3YdTTyvebJW23quUnPavRq3VcBk9uyf9go4hXt6Lpoqs8WwoTF",
  "key17": "48weJUmQgPrUzQ3FT4sjHeLvaxBj4tZQRvt4P7XJScp79TKcZ6oLcc3dmcWGUmeWGBji8LNxHdgSj5QmLWgUHLfK",
  "key18": "NkUqMNYUn4oCapCm1aWGPkx7Rw7MpbZn3ukS3x2qUzomXP9c8sTQcuei275bPf2FLseGYNUniAv9AKjEBqmHiFd",
  "key19": "CrhxwRuTv7VKX8oqD1SzJwMrLVSqtjjLbG6SxypKcyuF4WKzDnUk5z2isJZfrCAQVs22FQUMtEUN2hBw3NQ31dv",
  "key20": "5TytkLTyCXNwsApnQK2TGqwrRvSrNUFcExU8pM7zamvB6utSoA3i3ZWmm127YecizNTVmkARkkdPXgoKASPPpoPJ",
  "key21": "3FDnYYnThsGPwDqwyVqPHw35UKpmMbhG9hXbYsvZVPjAxJWugR6BAnM25pwCBD9bABvxffjCAHX5NQGFjVCd7m9U",
  "key22": "2BQ5SsL4DSjap1NRaXM4WcEmzqDQuySBecbVLk1BdHaXBG7nNp4H4yK9rQdMov1CRttTVK8LRZ7TiABPCU2qGvbv",
  "key23": "5BZCs8cUB8FjAjdbUun5oyytcB84i6EnpL1Y3myGT4VinMso7Yf53gEsPMHKYNRmNcz1fQEPsHyvFJZ45ueV6dHV",
  "key24": "5BpVPRbdpdypsjXsKLAzvPPTFg8vf1FQw87eaEyzdredYNJFMM9TTR61DQUGwSWYzKq8pz5huRR6TByibYuFmnc2",
  "key25": "4fZdKDZesR8P1dE6o6iro5VMvfsomv9RRdHL7qvNMU5ZVw4nkYpnGat2UX18WFZMZRMeuqce4vWq8YKCYT7FBbF7",
  "key26": "4vceZwMmPxxiTkiWMfz7EBRLKtTNc7WhJxHrS98V9zm4JqWy4Di31ZkVBwMN2ndFjfmc3ToAdJ5sAzLZuhq2Zg1Z",
  "key27": "3pFGeZR5Vg3HebTJpg7DPBwgC3MPwm7qvuh8hVgSM6iuWXPi3cWGty69benGtMzycyjzWBitQ7JQVdrcVLNgZLqv",
  "key28": "4wYdSD8rF59zmu3KVNnymr3JMiDwH89aZ56wSUC1pTwPseEo3cALScZFQDt5YfqyZVsf1UJgnHGsWD1bfG5CGehR",
  "key29": "5WuWSagnEQi6yvMKTCsYm6AgLRZk6gZhxUyXZCzLJWJbLTNTj7TU8RHtG6aouAh9e6Nskf8cGLaevAP5Y3GThuPF",
  "key30": "53VkPvsU3WWt6YZWggNN8DKsVvnDKgsrCLQsczWC3VC4xJBrmoJQtBwC6Bij3umUotHFWUov9pgYtooSXnEUtqyG",
  "key31": "429rrgYfY7nbeAoSGeRn6yp4QqrzH8wjBfYPbU2eF94vBJAQ4NzhvCqYPF8DuCZBq7uJNXoQCCvCspFtqQCmEea1",
  "key32": "4YJy9oTGk7e2XG3rEBzbFmiTyhVHkz3doc1RLo3PPtwSTKLzyvmxSa3Yf7EFTQkdU8XzH3GQ9d35FJDxbv46FKci",
  "key33": "4r8b2NRPtn8XWJQkcbsPWoUrv438PR8pnSdTsaXUh5qz7h87W3Zfk6FUzCFrpCGKR5gGao3gqEtMR6TYp2W8MJfu",
  "key34": "gxPPnwgJUpjZwZkLkVE3riu5b9hzfc9MYVHo2ypJN4XRcyy37YMoSqCkiNdcQNMpxzLsgp6xRgkQsdLcQGDDSEH",
  "key35": "Hs6vnPE1eEmT6QKsK6iKYMyyFkcXcLxwNBfj19H8jCv85e5tRk76xAbC7taoKo5SxRT9SVNwJidsrvPHa2rU7VK",
  "key36": "2ZXJLi8eyMXuw1b8rfiA4mopMRcWyvuZrEbdiKiZUufZe32F5gcMSrCeoYLXwfpvAnqfStdjJ6z28NXUmeBN19i5",
  "key37": "5m6AW1aifKexAbwVFkKcmLzEJEGXZVDUxcBq3ocMPBH49ZewwkQaKE9jpgwNrJNzyy9siAEHcGR1t3QQ68F647kn",
  "key38": "52pUrw4MbeQPah9Qfm6jRRv3NteidxVbQTpYpfb5sMYp1y4UmpF2WumEiD7ZjyMotuAwZuZ5zjPrVTqPautE6Dw7",
  "key39": "XgTpvnTReVAPsDnbw9fA8HYTRH5PqhWK5sk338mceUwJuzLNmzeU6rjr3mCbzTKzNN7tUFzHsbLTV9z23o2HCZP",
  "key40": "eTWdkWZZEb2iet1yRfrxUx6hnJ1Scb9hynxPyu5YFsc2xQSWESUNUEDzPZxZn3EoZuMiZdVGZssQQNhafWwVnmQ",
  "key41": "5grcXDcLN7h3NviRtF684N1rgRomeFPXEYKCVDfozqKBi3YWN6n5tPPqDdNYj3MS8Dd8A6YMKPFT9xFgi6V9bk7U",
  "key42": "A5L4bV41j6iMER7YG8T518WwoV2WNUqZ9LCMZuKVvKugF91uwdHXFQP429z6KYBgiVyQE1VtgaHBVztViWaAX46",
  "key43": "5g4UTDaYX1esyVHZjZpVJJ6KpQBLPk2ieoyoiCJDZqwksTtykpZp87wEhTbyykQufJMmZTMoLuSZXqZxh92j1MrJ"
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
