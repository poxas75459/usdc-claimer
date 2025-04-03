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
    "5NM611Pd6iK7kxgR3wh1pfuCjjCjMbLCpZjbAR7EG2WZdES4TzteSzU4futJHTKcj6BYvabHy2zpHuMjTk9o9kvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wY5uENzWRM13Jo6cW6JvAExUyqXGJCuk9D6uHfi5CQC2jKDRmoUJ4WxwPiDjo797NmcowoiJXDMBNKWyyJgA9sJ",
  "key1": "SHTvyjGzWqvFKo1vb43Z36BbRa35m3wRaDXCfsBMbMBqk3T73GFEiwKgtQ23XDg7tN9QmntwSMd7EoyNFvu3BpU",
  "key2": "4pyXYCemU2tE4uLdZMt6ZcbeYiTocdL7XupR7JzX1ocn87ZtZNakdCMAQae5hUZchVrr1a3neKKcfALuMp1BHVgB",
  "key3": "3HA47AfoQMdFsbvfC8W7tPWeeujjQUSbq9T2xr9Cuz75gpZLGNxQbhToELoLqQFyjcxDyy2jdpys8s1A39bAHg8t",
  "key4": "itifRZzagV55tK8orB8i7FoBzeyVj4TynvYWWMubzhRs9dCJGvMn3Y9KpE2m26NeUBZqEayh6H1zzukmxjMqcrA",
  "key5": "26TtPFFqx6qNajgw3Y1YCRBt9XoY7aSFas2PXPbdGAx9SBBiJ5hQTa3jhLYymumodSNfaYkik9F2g9p5un9cw1Bk",
  "key6": "58bZEySe5KuADHpExaL3Pnx7yg9rqnkqtAsp1LEkirhCZYCE5jsEAVTnwJ8bXJtCd7sQ5mGZePr9iRtDLHqAemXq",
  "key7": "5epLAo3eC9unChjwyZ15jPCK2wxMQCPJLmNuS2R1Vx8tFAVu4cKnzfVwvseqpWTZZ4JEkWVewFLmkGYdZY9hDJQ8",
  "key8": "5LEe496bM8SUnGudUdAcn5DtKJtTRJbaK5qNx97UqqTFiyAS5NKLTFM3wLNuwAkacPLvYJcvayThHDpQNnco6a5j",
  "key9": "2b7jUyKWcxfEUkrFP8gophoSRmm8HHfcBmDgpGCjNFyeZv67QPHk4JABic3PPPc9ZhCrRHBGwwTj9R8H6DqjMC5T",
  "key10": "3kYona3S1cHQ8mrSNBf9HE6y5GZv5PUahyCCV2ZQ7mUtro8GwTd4e8v5tzZCVAYhtcwFrc4MMWbpyD3q5KmgtaCz",
  "key11": "467HnJjKFtnBXhzduXc4aMxVWKBpCnCYvJKcKXH2f3KKbYrYLK3mLfSWqfdfZYBZEKoYniGos2UhWi2CNewtyzvP",
  "key12": "4zKnaF3itZZVN9vpockVwSxRCDk3EvFJ1ghZxBrZED1vrfL56fViXjWKmUdRbX2A9NKQ4cTEAD5rRTZT4zMxkr3Q",
  "key13": "2aLxm1Wgt2Q5LsdQx7urgGPsYtWNRfsCzAeRw1FiGkbS4nmHZmG7UfezvbsMxNeyzrfC2zXudCKLrwouN2JKj1y1",
  "key14": "4NYJsE5o6uw2YKnwqTYu9FoZsHU7NAjHhoxDMaURuVqxCZXDtPRzCeKU8LrRBfPmdkMkCwComyi3dSX5KkNFLs3N",
  "key15": "3vp4aXJeeXKmwpzDcjoNBnQfLnGGrHmRJEsNEWs8Xify6Du1i2g934DDbhCPkxDC1z5dZGZc8j2MkkwEeK2tVuL",
  "key16": "2AqDaeWaPRbAAj4aibmCADHo8CqauK6Scr5rDNEoTsA44YJHYhnEfHzdqtS2mqDYVMm3sci1guPXAMs85hmeVKSY",
  "key17": "33xhWZx7XKG34TnxosSm8Zdz2eKTDdNF13tTpby3x9HV4op8RJKQjPVvLUpr5bjgE3ta7mduVsc6ErcZA9MK42QU",
  "key18": "2UkScKhmUFKueJDRBpF9C8FdMzmkeUzYg2iVgVGXvUz1X8CXKuyKcPwV9qXcEvPSX2vTAtZb7RkCCcvNKBXMqwNZ",
  "key19": "jVuwDKaJYhddzZVUKXrEDPmAQRG5M1LztHYkTXKtZvNAH3uaWFa1v7wqCSWy75VfwdncUfTPf5vkE6Yz4BmpACF",
  "key20": "2Fkt83cmsLb3bDHuYEzJaVwi8iE3dMBehjZrinaoUjKTvsKY1steeVGNsbeo6dzgWuzgc4UZkJL4P6GZ6g4g3WPR",
  "key21": "2whULndVvbuJ8FbD1R2TegchiA7mDACPEVLf3qa4kpTb7Zgtvi6uB5ttbz5cwf6M1p8GWSXjpuqVCic2yD5v7JpV",
  "key22": "M2qi54EswSRN72GszPp47zyJ2v2HxghELyegC7weJcJrgDpsENkntFAzLfKiSh9KSt8anFCnBsaMqidMvxRn7HX",
  "key23": "5TAkpyunGskBzH5jJhqctiZfxcUMTJ795bvvSgd6KM7Chvjc6DAcYu71y9N4cwCaSrK5PqWNPRsDcP3cw8R6ycSK",
  "key24": "3v6gzD1poXvCAgoMUto4L94zyWtq8t9hPEGeWAcNVgyHrvB5Lpwrjd9hkLrn6DJTjXwH5f5sL4Mg2swGJj3zhgU7",
  "key25": "2e83GUaNQWWQexBKsdJ4xqdTBUs6HNvcrtFxFYmfgvnaKzAW6nJ4A7eVm8URGjymKxCguwsZBYXm6MYWcKESthdr",
  "key26": "2ETN2V8ehVixHhNkftfh93669qqq33PtHvvryeFZBE6CiBSyCBLmEVNg4AB2YVFZ94NKLtiFiWDpnxh1gswncZe2",
  "key27": "3jigFSJAn17E3Ypm9ED8c6Cfu38pAF67A9aHaDphRjVFQM5r6PSn3tCa4NgTeQ7PADGzwjkVWtZ2P6SthVUHcRMu",
  "key28": "27WUJGhFB9TWivhJV81nyvTSkUCBTxDmgmAbTCRjCSVkcYeYXUYqdxeNRL4r3geAJBz6Pv7vTJC9h6WEaxNKtsVk",
  "key29": "3aWTpytSMGVzB5RUYMAeYgn1toxZp7cvthV2BAsTaYTcaoAAzbGyYp5SchQ6v2U2ga4s28VxL8MU5VGqA96BkX8B",
  "key30": "3xr11onR6LW3QkuxfgShKMt7sTuzpfNW8tkoCdT7L9LBUSsbcyK7qqA8y7eKjnnpJLNkfw2gtZ1yohEgsLL4ALjp",
  "key31": "27YRQkZpL2T9rhAVKXgpNWj4FGAgc3oUjpCFxG5uvduUTWieBCSxvjzT7Esd4diMJKTxHmb3Gf12zmKBBdwo2qmf",
  "key32": "4BhZetatUhe18ybJsUA6Xj1eKWRrQqLKAmkSBhBwEJWGiqo7gYvM8R29d7s4yFiJcc4aYpjBbHPZdFUW7PCrHCvL",
  "key33": "2PVEAUiVJqQhZwqSTuBuhhCpAB3YZz6BUfZT3ECcyaML7NrPEFe85jhC97ySzP3DNHhyuai7eXHToFLAtv4WkCcF",
  "key34": "hEjrojLthfqUN81pQvi1VNmJ5P3zxVUHDLfq24VqkXaLsd7VHbVfMCuhhESUAVe1RMmgyttkmr1TXatEVRYUWig",
  "key35": "mBCK9apzPGtRmDVw4UAjCT8si3785dedN6xd7WcJABWDM7oywXbbK2raZLVResAsTT2oD98EWbJ9EHtLGVhYvkq",
  "key36": "3jKzXYqs89TPgX34FzRfdSL8GndqWJ6ja996ndMsQHjEX1fx1f4AF7Ya7kHtryurWr4MRW3shfqQTYWADXerikYU"
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
