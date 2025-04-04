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
    "4MishiqZQUdMhZBxqMoFKd32wsQgR5m57vTvn3rB6xVqfkDVEXpnkxLkhPWu2EWKJ7Dn1HkdLAtCT6WbAHWx7hbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mkKjtapqsydcPnLGkX2c674xy6fCRC3q4rUzmsBbRSu4qjHZLQicBPXXcKsp6FpPmFMx4BJV7PdpwQU7qp8Dyyf",
  "key1": "BvTgryuqLp3D6i32MXTfSt1Jypr1CpRe3NnprRg5xbzT3FhFAGAhsyVHzekMQrvkQ7z5ZAWwi2k4qn2bLmU6Fc5",
  "key2": "2MgyS8Ni8DEdiYp85gnkZbFaFTZu19q8uVjyZiLaLyeK2U8iG9g7R8ejV15KDqfGmVVTkHCCgnouCqYFRpzxvgmT",
  "key3": "2AMEiAbaTtXeU7TV146WEnVJ58ctyH453R2Wq3RfVikyQYDsUdtReyvhhSHUnHVWGpm8LDU9vkVCUxkCJgqa5hgK",
  "key4": "261mNqNAKXt7MS1HhTVHZA9emyX1jzvRRKCuZVRYNdH1123L2iajtgox7pFw3Eyfae17C6NTfisu3VWVKaAmyAus",
  "key5": "3V5DNK31oaBEn2BiesLSiyqsx48gjuTXE8KBuXHZycuz2wfdzMqrhQcRrUnpaN3is5fnbGk8qBeoFnBEvN4wjK2e",
  "key6": "2SR8SnEDXMiJEZPEYLa7mHUeUGsrzoQoyQ7Br6Bz2y6NNYSgv8Sb4ZseWcbhTEqYmM6n11FE1YNmcmPd7B9m42Zw",
  "key7": "5cv32gSvd3xobsr8dNLMk3rUGNUkuEjTXXPGnusarczYVcXjVi9jYrTicF4jCAGU7UnauHa5FVTnybTuieCTz5fj",
  "key8": "416tYBaymKX51uYeZwsyfBEi2GGz1Ey6op4DCN8k5699J6M7638MoCUWabpddurtKn5ZSNxw9xL1GdRHzxsuFXua",
  "key9": "3kYM7KgU2Giw7Pp5tnhZdxmag5yADXUJRpHG6MxtAJj8M8e1tQ7Pc9w5324E7NaRKwv2BU6x8bZjdTAHUowKdtKw",
  "key10": "3UYDKSxAxDTF41qzJZLe1L7rj7sqiwSC1QKHhY1xiuTgdPuSXNKB387ZQeecqk586wq5mEeT1pmB7Vq99grbbgdk",
  "key11": "3L7iELs9AY9csqjaGeAiDHGhcnrsNMYZo2s6nWxpNyGeR6hwfHpCofb4NDDmQHkDGjhKSSnBBAGobWJjboFXSgNw",
  "key12": "5nPx3ftfrDw1aBhwFsFwCjqzkABHgNbRQmGZgZMvMwdriQkTZfeWYRC5eUCwktuxhVbb8U7ZAjHmrg2fKuVpfgyX",
  "key13": "5UK6aidUzK8KPVejxYZrkFePW3yDbBb7Yq9M6HSLfrd5drF8gXSmL9U14yoiETSF2WWixjepGwQqsMJ3FR3uAWTW",
  "key14": "5dvQYEVzVPp5i8cv7BJWziNXa4HvG2qugfNuiWFgbJ1s1G1fyeKhZD3drNCEqXusJrWFN4FiWWamN1LqzantNafQ",
  "key15": "57XZ1JedEnosNHXGoqK84uUwdFGjQLgtkiLjrxbAA54T6ErTp88L3D581ULRn3jSanbPhqWbwqXP31CHFkgdaUmY",
  "key16": "TuaygzcnyogjffeduWFzwq646maoB175u3HbRoSxHgu4HxH55mfcYqkCgcCZZ7znUP9eAuny3tvCZBq626a2wSy",
  "key17": "64gzzPvPLNFP8GrgJp1LUkFSZjaGrts9XThX6ndVHwPFBkkrbEZM6dyAVVKVhDQRfGRVtigNPHkENfcMhVrZhdKP",
  "key18": "A5KEbm95VKkYVzMw1tUNUmb5C6gp8JgXBfVgLQfeF1pFRjAuTDBisvp5N7AEt5jkyU9ntrwva4cnNC8cjLx64Ap",
  "key19": "4mNAkYomRdfiei3F6ZJxo1WoZ4NDVYH8kTvhvexsXKJC3q8SwH6ouGJd1WYRjka9d8PZUaVGti6VBcFZx24Ee9to",
  "key20": "2MdsSVskh6NwQVg3Teo7xbkbeiMwMQLbShk1JP6Fw8cH9pnnRt27v83XLgZQtmMX1tVk48TBJTf7hQa4zeeeoTKk",
  "key21": "46tjRq8XSAjheBM1Nh1eFEirRS3uTjoCZWffeKA31tnDFChgSXCJAzjPhCtWDb2XEaa684UeLZmXZnBsQhG2M7Eb",
  "key22": "2cCV7sBWx3HAA3opAiLjWKpcVeJhvXPbuRiKAnmddDD39eyJkbNZ2c3XFZpAEJSGJGemkfsDGpPiePs2CerRGhn7",
  "key23": "paVU9M3km59s9UwiM8dEaJHdQs8TXcKV9kSfXTMJm6GtojQHzkuhDraMqkipfhoGkRRpqkivDjosKNTvEW8pvGg",
  "key24": "23xFCrdhhri7s9V47gfg9fi8JPjjYVSNzMsRQm5tyDPqhaasPieF1h9aHe6HcMu3JbexS4H6nBx6Z7tUPRd4Kia8",
  "key25": "5bLHL5gyMA1d5HiT2sxPnD4vTRQ9S6v2fky7TdD3TGJwFjHdDnQwQKkNYDGRUvarCfYGecp1Uu28XAJRo513rBx",
  "key26": "4MK2Ghi9zzpnY22HnGg5sEyVcXifdkRX9JtFJRXmkVB4XEHQyJnVJinBCJ2TrKLFzDp7ntHyyZSFsa1EYyvC35zq",
  "key27": "2pDQnGiAn9ruVxYKdzVKosyAyKZWUMDZyWrT2LccLqFuonWqzEtFLV1BwVaW28TuZSox8WT8eybsM9MQtsiFGKcP",
  "key28": "58neAbu2tT3iyGoK9MYXsCmAEiPPGiXaMTpbfRzysQKN47s5tHdGYsrGzvwqW4xQgsKXG2uNRsqx1v7V5wpTj8aF",
  "key29": "2Re6Gnuw8VaS9UpCku85dfUBSKAk4YK66s7NyzPQjW6MV7NtWqVznoHt2vxwU5zSKoSYkSys4ptXaXED7D2MinMs",
  "key30": "2YXcNAQ646Jo3CqJy8ufSCeRrSiSXpYHcCrNrh39VFLxY5693TLjki3vfZe9Wj5ymHnXnvrcWrdh3huA3p7pwuBo",
  "key31": "3Z83dzxxodX395ALXUMades3CWq4LPodXGNNeHrtXmiSTopZFZSYeKcYzrX8jcqErfNyx7NFzz7ZTngU9CfLN8eM",
  "key32": "4ocdQGbh5QHzZ6pLFdWZS4y1X1Vc7ycrb2k3ziwXsDn6W8LbVETUh5zo7BnPXaWvvMPwVonFU38mbgh2zddn9Xwd",
  "key33": "59g3SyY2P9mctNBvCzCTnmz44u9j7kj5BiDbPXkcrwoy6SVYqcXZQ5tjMytzV2jSyYtpYVSw3RhQdSy8aX1Kfjua",
  "key34": "zaLV5eTZD145VzD8NV6XnrsU2Ak4mYu2rXv6ymxDV1iYNii17gGTmEJFfx8rTeH525SgWMQEB21Qbu4Y8SUj9VA",
  "key35": "3soN5KsubLwY1UrVRMzwFTfYQCh3xuuSzYzdXGWG3qYjqx7ZfCPPR3A9sSf3Q97dNnFp7QkwQ2cvm11xMuNfKpEd",
  "key36": "4e7PAK9AR5JdoojaCe3YF2KBPDxAS9bYh84AtMAw1dp9aZF4dArMA7ZnWigGo86ViPkDakgnMAt1DtEHmAyA1C7X",
  "key37": "2JEiF8sjNPAPxEU4H2jJGA52sHictwyfyEp6S6C2dr8vrUCCGG3mtvtKiBXbFJueViVVXvtKMw9rnAHhxtEnZwMP",
  "key38": "4buXneKPDMGbGgkuEKuv4wykaR64WGZEmQTGZD7TRBsF1wEBm81eZaB4LQgvsbdTLDBqWuYxQ7m5BDWc6ty7iqbu",
  "key39": "4VvJ1wkmLHJLgHuDkJyncZtF7n1rzGnuJfGWdbFy3JBEaKZaCeiU4s3RGnCRafUiKf8MLWV7n8rCmBUoVAo72i91",
  "key40": "3Yo7J9W5it7UwjUKbNrJAYahPtVk2KeQ7nZ1RSQfUexHCwwBD97SQgLBVe6gXdQ8Wx2RmCzziPxFLmmnf7CZ3jx4"
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
