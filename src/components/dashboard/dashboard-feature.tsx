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
    "q4Bh7pEJoLQwyzT74yRVhuz3SDq6xmg1zY3dEVCVwP73fiXecvD2kibewL2xk3PVCVWP6qNoZWTZ6dfiB5baDdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mQ3M5HGPNJkio2mrkY8jERon64W3XXGWpFqehX4zb8esTuigNYrAKyePQL5WyeihRiY2Yop4SG4Ly7amtSZWCUq",
  "key1": "4A8hKcFq4sz7q4DfND8sYixavw7G3xUVPowrWeyTy3yuBMq9KQhzaSNKmFsBchjWNYaKy3Mpccbiw9kb1yynQQZb",
  "key2": "g1xCfdSJUUmvNaYH94Ct8orYfszjAdQCdgdQQtCvo5wEZnrwGuhTz7rxkmoTugL5MaNf8aujyMZzP4bHdehDT6j",
  "key3": "4eyJTWd6LtmkFiRwjfzgqU1LepgVnu9KKm9bi721uoeGX6V84BzxvFWGFfop85y7mA5v8rT5wxrzaaCR3QZxXsL1",
  "key4": "4oqFXPkXjcU5JKkcS8wxh2GreiUArqe4JRJqL9BdvcV1hpxrQbP8e3MHUW6wVn1Ko6KW4UM4CwNgfmDjh1kcPDP4",
  "key5": "4qGMhgJG2Ut3eVsG9JK3XmFzvhs2hwgwBVkE4sgXwDwEMvtzKViASJ9RNkhftLJSsZFr4f3DUVfsmckwMxkjQrVM",
  "key6": "GzRTGpVYDS2SQfw2Ndh7Shz5ZhmEoFDV1HkS5pWsZjhR4dRjtUNGeuznHLGdPKM7G1BAyJjq4WL8Av2dEQBTkMY",
  "key7": "48SWMdBQZwkSYP2KKrYmDvfqGBhHtpkyeq43VxoDXHvfX8xF5ymqdUG8aZekny3WDHjLtmgUTWhm7FiaeZ6CsK3F",
  "key8": "3iTuQtqsFpb2nDNXaL4gUuiW7mHy62J66QckgaztqSFK9XfpJ1weUuL6FBsKf8wAngRFYoefxmvo4gK9DmSewadZ",
  "key9": "5xhEpvMugWvyRchCth1EbopDaNdLZUnCxwRNcS5vSuV8rcxBdL4dzurTbM9C4ABXaPN3wfpW5cTXHXMSUKoMD2qn",
  "key10": "2E5RkynqWHkXEn1Ui2j3sf1ZJny1Sj4DhRm3aetFNfiFcH5oceZzookbM9GcKjXebbpHsxmirwVUX7wUwkLGf7uS",
  "key11": "34diXhkW3iJNk66AePWSxTtsPofCP9bBeVGSQ2F1tWsuEV5AEqVmAHmauAYHq8MDHgG7NoLLjbj7kaBeT8M3o75s",
  "key12": "4hqFxPPCvsYqTjjc2JkqKQQ3NTQDW5KuXW26yaNkw5vgaLXNdz41oamCxUnaeHch2nBSRtkMSV71U2zyLEGwiyL4",
  "key13": "2nmetscSV7X9UoKiQjyPghghpmPGTQgDQj9xuFEqBTvKSnSGUc7UvUe1faE9RNvyK6Ng49NGVziLUKLC1jcFDRuT",
  "key14": "4kxrDrrSAijc96MaxyHhtwZXY2pY6ziyXFVrHMvJTgq2rwHmGMVTZQZvwfMv9sVXtTFvxkiN4JxYruSyBo8qoHhg",
  "key15": "5NVmt4B1we2RTT9LnfhPsHDSofjPrTbQoAEfWmqu5rFPDW4kT1MfuK17wvjbcTa6vck72ZAqxtwA333oWq8wSsPR",
  "key16": "2yNSnsGHmi4pgjazTEoizzyqneJ2DadJTB6a7fvLAcpQor2CxPZGAHaucy1j6urwFDL78bUmDyvAxhQoUbzq15Yd",
  "key17": "2VML3GDYXwgrDYwv13nkVwtowBeXMTxbfnnL58aBmVuYEH5oTAGCDHB5HDZXgSM4rkwAFJXsUwgbp6pBiq59H6Ar",
  "key18": "4ZgcnsYnR9amrjknviEsLPSuhrM6Rk2E8DekdbiduwyF4A28V1rGVruvNKaYvvvvsSt3LZvhaLN9dTpzmpKq4Y8D",
  "key19": "2bRxiaDNwRtGSLerfxaKjaXgcU5ScjrLrn4TDuXaQPAnKtBGTRH81QETj3XyqvpckEkxZBM6uPuREofgCUr7A4Lo",
  "key20": "3v4ev3xPxTY1PaR8RmPUrCpgVkiTvLKv7kCdCdRKTGsiP3PCGoW9o3w6TWxkL4ZuAXqoMTwYT2K5Xqmy4pw8jrWf",
  "key21": "5M5RewN2n8SjXETS2fV8koSy3cAPm8RKzvrUeXU6h79L4Mj9ohDpdzEeZHty7TVEGyicPcpxGEN6uW9aLJngDC6n",
  "key22": "4oTwc9MynbaKGSKxh2dDSovazV7m3RZP92qkM16SvbLmeTZuBriqKymf9vm2YRQmU49AwYYaDHPScLhfsE9f5dmU",
  "key23": "5bNTjYrcHCQGeDToNtK9WJKAYLsqBxecf1CRF6b9wWP3iSBP7GXCsdGohgjnRZYeb8E47FSpYF9sc9drFujM17t5",
  "key24": "PWyJKwrMxu3c5ZU6Ren37PU2DQh8fGHTTXZcLB9Bom6oDEanBQv8jbDJ39nXjaip4swfB7ncaUhvFhxwjWMzDEk",
  "key25": "4XwuYu1gAcA72yzYcv7sVZsEwVWVSNKXStND5bm6nJfyEXvGYPHvtQmz9K4UeRPfC3vkft1apEFa3xPTrAvEp25Q",
  "key26": "5vRxYzi26oqPv1x8jju4ihVZpoQe99YwGtBxjHSb3FecjM216HdSUp5uxwcYBr3kAfT7zKmVpoV3bi84GEHAhPQS"
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
