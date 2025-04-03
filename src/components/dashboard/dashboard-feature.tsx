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
    "3vXgTSngGm1yeC6XetopGxdq8iSfQN82h4CXFh5brii7TeLs47HCWY9Je21mtHbsyeWcJ4cJChMwjSEm6TTii28w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jEZ9hTnSfSVe5eGmqaPYHKWGEDVizSUgzjYhbBt6q8knoQqW2B2ru2wEdbB2y7vSK3sjbemq9bNnjnzA1Rg93S1",
  "key1": "3zvyZs2qkkbKj1BXzjBkRq5X3f9xA3hs9cqXSJdedk19JNykngShR4Q9AaKnhtsNorxZ6vN3KfpfPWoCnEairMCv",
  "key2": "2T5zJXdMRKr9EcXwhXx6ehQk11SCQLDKfzgZnunTNjGJSrxVvey3aNHA2oLthAaGrtBDcxWGdwvBET8NenJn2yep",
  "key3": "mbFoRmYSafv34KBnBuUzPzWM6bUGnhrk39gpWrbp6ia2RrBTXcQrjGhBNLNzpGESdJzz7Wpz8phZG5M3VRNcni8",
  "key4": "36rjTWvnWytwE9T6c9kY6khFhf8ffci2z99xd3DQUr4PMK7hjmq6bstd2vjx9N1QeUq6iLMEikHGk3H8Pdg1zQGy",
  "key5": "2tR5ew5U8Rhb3Syh3dJevAc1ZmxpAxVLjYqhTpq4LM7JRctrMADAqt94DBTKMCGdZJBwvPEhJiL4t3UgiYdcw2e",
  "key6": "582zJdfy262tsLHC9GSC59LFRvVekt5ov3A7ugAyrHNdJitCoXjqW5uqDLUDggYF2xj6McCRo9aJ5Wp3gp5GP1Yr",
  "key7": "2aoHoPTShFBoR52NGqyUJqRT99biERdA4JUwtskzq7eGKqrdHNV3HRjyqopnPFzXMydzjyqSni1BU5qtXaSzzHzn",
  "key8": "M6Gu5mnQnMQomg4fnQHbTFMUzS3Jercd59TZDx27quYjytazSxBx6VKSjqfWGxaC3MZFSVRnL62EFgEFoi5wYk2",
  "key9": "A3VEw8yL1jHgLbaqyNdQFN2Nikx9ZrqkFxsSMsxb9NfEQtSHT8CaKMABH4dq1iRoQgCbLsup7XoMosfTxr1E2gU",
  "key10": "HDe6Nf7fcvnnAzYSP2s2p3zgJS7aEBuP29Dkt1wCvPZyUZ12xARBBk71RiS1HJ1vWS55vsNT8mgEzoFz6MNLEeU",
  "key11": "3abNKX22XQujGM4m1tkXqxuTtBW9gjGVTrFQmJXb7qR2WmfhVUgZeSeFzVutDzgk8cjtt88yX6cHiVLEtYCjgRHf",
  "key12": "3WckGWABMphPoQEcLtnV49ShTEJu3KN8FRioN46stcpcmgVsPxVYdcSKShtiqAMn5QWiJi6Tmtqk3YLe31BbwzWx",
  "key13": "61fkqKXLfxjQjmZExe1YVuHThbekNj8cnC1TyzXtz97WyXeSSL5YYV9BC9cCCNVka7MfGmKzW7P18th34ZbLPDZV",
  "key14": "45TVEJdi2DPNZ22reSZ5PtR5dHr6PD9BjHsfSoZb7CsEacLa3Ykm9NoaNUPxDfqYp47ZwoubSBJcF4dRauyrTPzJ",
  "key15": "26Hrka8rR62ewDRJRGKKfZ88FoKPmSbEgh4VgU2NYZkwdjKKKqVQD5HpkGD3doqdFtmTSXWzSTR4pgfQULhsuq6s",
  "key16": "4k5kdhARPkojDJLgRpdtZmBuscCqbxzcXT4CY3JK8wb9zJvR4wDb7K7xw6dzrp2E78TPPbxkX3JiU6P2XEhdEwkD",
  "key17": "3xFw1nt8t4EXQBy13UYT1sRVS3sFByvxZvCzRMWXtszCAbDid5pUcG2HirZoEst6wRkgeqndFVit4qEKvGd6kyAR",
  "key18": "5vkc9tKigy4qsMyVhykhVUaWjjE6H8FS9Bdz9aDRuNQQ8AcsyU33933o5M2dkz2rbD83WYtMFjRe6YismS9NiuPi",
  "key19": "Lk4SeExEVae7gAedKCXvVfKFrQ8xnTtx3BMXCC7RADuFEgD5QQZYTib1XsZvgyavebHva96zsue9oAjjTsRMved",
  "key20": "ZSLeQazSB5KKRPxBU5sBh8pW9HK6spfoQuGpBZQ7rfmR7nZm37gfEiEY9fHAmEp1DsqKkyhvbW7gmym92UrjqG9",
  "key21": "5gpeUgThyEQGoE39CxBuzVsyqoPxWYs8VJn2GDpfawQrJ8q7J6T8ay3DbEsELd7DUeqVcVhiUVmJARqqW4Bbcg7w",
  "key22": "5aWncquC45Wu24ETdkQmksMDjSomDbYYqgm7nSus7xHCTzuZcc6fS7ZX6gHVFQyTwUDRdKjsGR3RA8RoVjH5hT1x",
  "key23": "5oqhPTd5J4qzVgXfC48N86B2NTFgZijN9qa8y4kUsKJXhXQXEJg3yDNQgPwFmyXhPNqQ4911xZ4Xnx5Zx4Usi2dR",
  "key24": "gUsodHDXij6n7BTwjjq9uL8fEpAt2Cw44eennGn2YbZHyUBb25tyKS6kQetZeSHoDXPekN2ANFJrMAtDYXYrPDg",
  "key25": "5wAPqv2qPsaJrzzf1pyyj9vNENxNw37e4uqLwdDpfvyfJ1MvNSdRApxRqKSutPzoK1riUtZvfqabsbRAsFMcfUiG",
  "key26": "zd9e1jdJgTiadv5M5RTftWPo926jRBhpFSq4G1nLZtZweTdHmBASPvGa6qnWpHXhUSW6bkCnEc2wGpoUs7Vmg2o",
  "key27": "43iz9PLHHUCbTCaodkdmnfiQcsLKoQSYeg5ALDCDn89apu975TQb9xbNcirY6rhUunDojiPBtEkPB9Ka4NhBBB4p",
  "key28": "2uWDViL5ipqhJ26ypB8iQse1F1fDq52JStCstoVW3BqVPimcrNye9gFtofxVPy12EyvWV7McjMe1qq7o2CGVKJ5h",
  "key29": "4tmcHcrZoyfmixbEmNUi6eVhxUfko4sgFHQvwmJuR2cUi8TZcQQiY2YupQf8FiS6eic8betkrtAN9bTjsitWjLgh",
  "key30": "4uaRtGC11kDGX3GEY8AhopBVXvojSGz9tgChwWFMF2WGeryQ3gMydEXnyaRQZEbCFa5H5euKhPdFBS2gS2P6HfpY",
  "key31": "5HCsBvyUPSoFR6KVoJ7z9qXcXXbAizH87fpEpJ8mJ6WGgP5Ba1g65nvJJeAviS1mkAD8nP1VZAHGMKMVGfroXqge",
  "key32": "61aVgdnUCZDjJn2vmNkgVHB2dTb4DsMxJQx9w2vYtXAH7khhBuyvzCbpRsUtURTwBm8bLFD8bShx4LGpt8PpRHAi",
  "key33": "c3eq4o9deVQAtGBfXVSJzenC5vpMihn3Vk2jRNZsYTav4rf6e3ycNGg2Di74p58jhGUXeMzMXaMvZZo2HEPLjMf",
  "key34": "4WkTCH7Lsgy8vn8qLBYV8ELbHJT2pcBFmFdZBdvJHP97z2gSJvkdPpuUxr3nSqkT9QiSx4B6EWQ7RP2moKmM36yo",
  "key35": "6quQCCkKNuRUAo1NUngGwSkcGCGtPR8XZiwHF5uCd3rV1QcYgn8YNfd4Q2uYCTHRr2EDiabShQjqnM8adCmUfq2"
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
