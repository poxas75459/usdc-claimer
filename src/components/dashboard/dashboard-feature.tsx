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
    "5niG3sfWJnspYi93nQKeG9kPGCDDvZiP5rAThWHxVEGd4PijPo3TbuvpJfjXgnanhgbe18ZpfkMqSbkMiyS2jkLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tdG5qPVZ1qEH7Qum3sgQQR5dRh6rxSA1ETHbmHVJ4CW5VUteBKeTGFPTHzpUatqc9t835KhV9AKFa5MZ1DnUneM",
  "key1": "3kvntSaam2rSBH7rs75kehGSDX8x1bBTZxbFDgN9hPhpUqQyK49sDhvSfXg6y2wboCkGEvDmYSnGLo38u5ie21db",
  "key2": "2nvHVX3rqexxThkD8GyBTK8jfA4VAZQNGa5UwXEMwwvt4RCLnrjhxEJ8S8MNsDazWkPiZ3gUrwuPejekuWJJqoJF",
  "key3": "4CP745FX1GJaes7SRpKUveSmV4Lavfa9PpKwKDW9143ThNzfxrqGZu35tjwwDTvnbh5sPt4GxiGqzpQwmP4GoGZ9",
  "key4": "2RCSSqQ2qEVUc5xuqHgDwJViqEvFUdQ4uTs6nAw72uF3urXZerjVZz1bFGREKFHRc6ngTwmdqBSgX2LYuMc5SDpp",
  "key5": "5EsaqRBNwpQt5tYcAqRoYZrZBY8fQX6HZcVFDpAEj9NMA38ceCh3B5JBEhjvMHX14roGyb3prB4LonG2PyVyGmtz",
  "key6": "3iLVzy6Uqkp7WHoRVSJ2684Wo374PfQBnVoKz1R5jdWe6M9TiqmdfgHTREU4AHPmiKVraxE2BV1q8McUCacEBbTc",
  "key7": "5VoGEfEhD3HZSr5aQPaPXCaZHFREBfjFCDKfae52eu7fAzwDzMTdYctcMZBNJS7bLUca4rhFbBKHHzQHzqF1hkxa",
  "key8": "3optbwaVepj1KxLAWc6pb8ZL2XYDxf3Xey9EK5dnNgxeJmBtbCxBnMi9R2pmWRK8jBweS2QB4BtpvMZ1Q2b66Xiz",
  "key9": "5sZhddARDScdxY2A4jfdio7yspEUhGXn33NtQJBY4seZcNmTxbf6i55myBsXSEFr3g76cEYJGZAg9ThRDhksdK1f",
  "key10": "3LmhuXm7WckCKdLuasU6gSSoo97cSd2YjmGtwXLhPFwhZPxT85zXQbw3nFLG74QW9KSMt2bgQWXncW9HH7Dfo6c7",
  "key11": "4vmVbd5u4FApUD6E9Y4Y1GFxHbNVZCiQ51U9DmrkUghXUi9NpSsxxhzd8yfbPp24H7LLfhgUDGAAbAVa5KUaQxBA",
  "key12": "gXyPFX5bpz2wiqqgP7WdZLmanLtstj8BkNw2ozUa6Vk8iSh9jDF2y4YxGL5ZoanByrqFJgsPQa6FtoaUDMPdb2a",
  "key13": "5Ts9CApqmT6whK2L4jFuZadf26AoEjJo4BGxrZNmUnrN1HmzaCKY496MVyYBJwd5PRSENSeh3r5Hfaq4sxinv7E5",
  "key14": "3tvokWHcWpmphEa48eSyB2VH7Ctt5MedWPPGQMP1u8rgkMoQnouGE5NRkjTdZSH1fvH4qH6W9HTMbkTB8mYzNAGZ",
  "key15": "5Ruxm9CZd2F6LMLE9qZW68js1BahnhjPNE3pE5LoHvvZGhHQA2kwzDZuuSsmhxXaUt5Hr4sfGrnfsWTKu9nKszC2",
  "key16": "4FXboyoANyoQHrKhpBQERfWoXRsSRR5ZraZP8ovg6p6gjVbLJf9R4xriu6AAu7HPihvuxbsqjtithVHpvWovAjDh",
  "key17": "5FCeAQHDS7WGeaEELTwuvsGpukTCbHGB73fj4gbhTfDzUTkcPxfuLKf8YKizvTUW6ZrgJg1WJiYN1ZHausqg6cMS",
  "key18": "k3vqEHSS2TA6ypBqhTbr3Mmzz9QcC7raMP1AKikkPGpYZtckzZYTYMRMFUQA438impjS9c9PRcAbeiHjCHrDr6M",
  "key19": "2TCT4eUrfVq9AP7GZtafxpVVmdgkaj6nMaZJsDmrA1Tpu6j53JEa7bpuzaMFiJc3AJKPQ8TzRewPjLZoVJJNDPFD",
  "key20": "xeDPgjQpSJq1TheBHsGVFCTtXwwP4tdtPEZ6HZUq2SrLxwFMyZuEpHJtkpzKrk87nkpayZTPB5f47wJM9idmmm3",
  "key21": "x9S6xKnvwHMG9eVMmws6r8VHMDjSHP88jTyjih8jpUTKqwVa4nfyS3vPcTwwdrwx3Q5a6ogv91Jh6CE5zAasFB8",
  "key22": "286WzGv1ZwasHMwd2RXXGG7CiVR8BBCo1a8rXch9RHiRXedrcj6jWSqBbwpqdkhVPsXAooLg5jfyFgmwb2FVkbKZ",
  "key23": "3QH8U8ssh3rokHz7ntain6FAwsLafuY5ZMyVe7nB9NkFx7cFaaG5BWTVNFpDdNPunFYrkYzCrmnQh8C7m1CWdcve",
  "key24": "2W8cj7ptPGw6sbchxnZU1VmTZijK6SWXbeqY55RNUbeNYLbiGnSrLLhRD9YKk59F8T8vL67XjwQtHZUWu3W23k37",
  "key25": "5g1Awx1deZaShxhC432zcudGSvosw6N3sL5hjgcnURPpM75LbHy1saXzw9pupKf2WZLDe4sdJ2FAUWafPAdP34Vz",
  "key26": "cVKDBS1HEXY5myEXycYCRaWYiarQWcg1FpbbriZK2drs5kCsCrccfZ8BB1WJGdfUFWfhxSJv1VCWfMuN3LHXkvx",
  "key27": "4yb8nZ3nsMMDJWWdeKrbqtcbnY8SW4zaXwG2EdAcLJpsy8xHJmYLpswaVTRjMFYDx7Sn9vfMDgyCn9VeZkp3vsEf",
  "key28": "4VmLAu58UxAZjr8BdKCx6TqLBdMUUttE4BZLDPuEqWWBcnzLGW5Q8af4xsw52jxyQj5n2sL2u29SxocHaJvVH17n",
  "key29": "5bSpsC98j54eucFGFkR9NndmW6DpPcUGg9t7D3AvXbcyPRayEd2LGDjZTqfcfj8LckQMwfhyznLY1aJUCVW4dyrt",
  "key30": "2xbopFk93EigTKAEnFXeFEmV7nikoMqVKV1pzxUkTf4cxFfLpxm7fPuwisr2szggmDwyCiRDCSb3TWbx3iTsTUj2",
  "key31": "VSwVfQ8fWonFHij5K5uKjmC2LW3d8Lfbxz5vrHRdLKQNB9gmgANxPDrJoxMVW3mdueHaCQXQYdn7dAkPvpA6kLv",
  "key32": "3decWP3hDp5SzuaeZ6vxDd3kmxWigV5PxbRTkVwfxm2vcDAFBqZLFUv7BmMnFKZUACPrxq5aLNVYunyVSKTWJVnU",
  "key33": "61zzdZBJofVaSqoNvTpS32W5QM5FufXc5yKptXHxo4Y36KoEKQgfbaVRAjF77j6bJ3tBgVNrG4VJa5ntvFDg5cX6",
  "key34": "4Rw1SJMAqVmddu45gQ6C9g7YB2gyDkwtm8v4BN3q392kfRTw8gbJciExs26CtPrtLwMfLhJujrPwGUT9HtCKdVhT",
  "key35": "2VAssmjQcekgd8D8AwWxUV32FhrPXgBgjQJo7z5Q7izZzvqTd255diBWGqv5cGrdztg6V9JF5Pwi99P2vTBBrtLh",
  "key36": "3U15Nt5JBwyCy4s5zFgBw2gXVKu82WEkpGRom7E194Hr4XQycxXed9KKH7oVshn9oHyLNEqqMmaktRVWZ1yhQ6hJ"
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
