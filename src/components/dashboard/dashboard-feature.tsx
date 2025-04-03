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
    "2DQ3EEJCzGb9hDJQza1LaWhuccrcxrJBWJFTgKAMuyFDefxWtMfMEyxGoowP4d1m8CxvruDdr1g2mBi8ztHWY9B1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NDHziuCFvq43SrDEdxUq2TkXn1qXHBHS1kuw3v9LXQex6m88Ay4oUbQFNN3oKf9xzrxhBLv7eo41JGSFXc5GnKb",
  "key1": "2tNV243YdL37n4TPJZhKbwtk8Eiu8Xon52Ghi4aNLrioK29PgkovJa6NKUp386zgEY83kComusnmaifYsy8g2Eom",
  "key2": "3af3R5BAkRM1ZN1H8RnyNynsVmWW6SoMptTUEZApmYXas8p1NkL3WmeJKDuERqZPoWBUymJjmbCRjXMcCXZrQuoJ",
  "key3": "4YHJrq2A34VA69G4S4txBequs6za57V9gPFA4FSrN2TJWr3HxbBbNbsADhCZKyLvkSx9PvGMq7Qqbp1Ap2vGatxo",
  "key4": "4Z8gPQXApnZQiWiipDTDMEYCUZzw5xRAfgGenrp91zfxz9XifemrkdLweV319Vb18hH65UFB5vZQQabbMeXKSvJw",
  "key5": "2DoJFM7uCTAASNt9zd3jAKc9a9cHCYWvFTF67PtGeN4d4H1ZGtNqBpCadsTKCP3vQp6CuzbiAMT9mkhHZVFQ2NkX",
  "key6": "2G7NPmnYxvnJkHgshXLpuXmp3eD92FVkSMFT4NEoT7N2CdMS6RSsqgNkaExbRA3FdQ32WnrMXT8ehpmKbfPgxXKx",
  "key7": "2xEgsTa1FDGy9DHqnhT86LSBDiQPNcpHDDvtUsuCjGWjWx48PYF7uUEZAi7u9hAoqVTysaUYERaRpzczWvdNAFvL",
  "key8": "ZViZxTV5k9qas8mNRiRYVZrhPprCgQjChugUHEXFNp1Pdvie5TAjB4iqgpDV3Eth4gVuFQ9s5mPjuLYL6SMunM3",
  "key9": "63YBLgX5uoM85U2xvfmohVAn3g6WhSmiHhndh5T9vRvwSkKuiZHXzpG95wCd7BWPDUgVmN7RMtm9gqKSrQ1boY2F",
  "key10": "u9ozxc9mYhLBGWVK8pELuJAQNoV74RupHGTKukBAqXwMNU4WJ7jAYEo8GP59CeW9oMUBDatSztW1bQVwtsRq28d",
  "key11": "4NcFhYXsjiV4Pffm1UVToxFCXBZJmKJ4U1WsCgMsKmvzYEdbrp7pow8Q91yyqmNs3DameJkQpHLguzNqzjDn2q2b",
  "key12": "4RS6CjWNbHqmZ76GU9RnuUEDqc3LNa45YUFKxcyefugBzKarcMCZMAZFQwrHCQ1BgjNA2Xd7C5GkrprMAnQ12KwH",
  "key13": "2HrYuxASJAZe2wTWnx4jHXM988ztDrSyb4YAHsLxw2qqGme1kZ9HCyFBeHNc2PpxMic6SkVmai3eWiJdUyLRtuwp",
  "key14": "2WdCgUuhXYQyZgiAndePhK8xP9xNf98oTjFpYe7xz5SbTQ5iAjp5xxLxiZZP4gspq6mFvCikkaHAbhAemG1H4gHB",
  "key15": "uF71Pw258CUU1xHCaUTmS18R2D6fnpSa28aVypHMj7Dy217hA6vYxQijkW1X4y19nEANB1MUBdiVKABtmU6J1iD",
  "key16": "2ym4t1dkEjBV4Ym5QR6n1WvQC8ajfdMYHYuDBHjNoFt3J1FfcwgwpoaWBYumUSDndQp5v7CLC94FQ5otdwpYGnTJ",
  "key17": "5ipim1q1bJ9NAKzhxnbGgxNEsEAiW18aYFWnpebrSkrQBgezbPaCtW2UqxMCb4wkxGW5qJQ4Y2pCejBsnHfkqP1z",
  "key18": "23ricsDYjZtrF181ojT8wEVY9wjv3gr7aQCwqBDN42FqYWmQFaLdfuSL7Ma4xFjNZerqqQeFxv5FWjtRtfawQZ6a",
  "key19": "5PiXbmcjiGfMcWQkzznZBZEdTQvHah5yU2tH4HLse9deyiUNoPaMHLKqU8soahaqcEPf7bTan7qMk5WNHnkMmTPY",
  "key20": "3UgcJVaRGccccE3iy4fDG1ELx8kNpKqCtkpWoyqZ5grXaEnmnucyA4MazSEsuP2T7PAZYi65YQAxWFfLk62BkX7g",
  "key21": "4J7cxZuEDJjbU3PKCgsxnJJtoQbouyaG39UQoyZnqdXGK6cgyYpGxYT9raWGhhTziLEmL67Gz4438ZVGZ1kKaNA8",
  "key22": "2aLsiSzG5ToEadFffYVQiQYtLAk9kGVqwNeif8ieG8hf1dsH6WNmajsWTHS3wxzstrn1js8QfJ6DtmXgqMHQz6rz",
  "key23": "ZNPnyHGGasbe7VEYwop439q69ygoJUAuUFFXehUWHZZy4EfseuC8vD4yCxQppGpkza4UynN21M8H5x5ayAun9wF",
  "key24": "5DZf9z6BpL3QqMparCirjy8WQGBnAkT52BRBFRpztBYGtFgRpL69vdnARvgNStYXx7DLZNjMED69hVD9V5f7u1y2",
  "key25": "s4UAPLAGupRYPBRC5HuHstuBXCTpKNv8ZH39kDCZZBv2rJkKHCBJRuTpj9pbkoZSx7NUVGACYXCWo9DFinUQScd",
  "key26": "5zezgYmQvzj8chFZ2sERMGPVr48hJY43JfNttkCgJbQyLaQicAJYCZpYeW6EyPiTWBLN2WCAwZoT8C9iD527TG1t",
  "key27": "wSwHsCe1WwD13BTrTUDRyPvuiBrsFLGBs543Xd8K394kJE6QMUm1PicTVW4ARday2zaRqLUeRwMXujXK9LXY3LY",
  "key28": "2pgpkJ8bgAeihiEfBnabkihv3hjEJxMdxwU77CBrFHazpnSAnGARKFTRYJYqZemJTHVvQYZUsjZPLYA3fFjKWSgQ",
  "key29": "pzqVvLKkLHb7ac2tkJPHBY1Z4bVfPxf5RhdCCH9nyEfAnVXbe2RR1NU7mr8x1Tedop4Qu9fbHTyCbdbwyBWmt7q",
  "key30": "3uP3pSXaPhUcz96L7wwdAadbnnp4NbVESMbCwbwoTkunx4CepPxvLH1tDLCTs2AUGWyEgfZiWctz97QnUbCMXaHg",
  "key31": "5pN2TJHL4FofmWftVcS62FUAuYf5s6AdxGENNwG3GNUNN7EkzvmHVchgqPurpLh5fbfPhJUwZr1AG661U85e2TTn",
  "key32": "21vc48hTpy4tsPvUX94N1tTK4gLQLnXajnzZ3CHxQxGnDs72cuSh29vuwxPVZxtf914rdHuEHB1fJVxvWqxsgprU",
  "key33": "3XVAfgJZLN2JVfnmnZkjHjLiobGEZNE4uqMM3G1Bv2NJpGiNhdPppgexEc2DpxNtmYmyiZkQATdML5fEoC8wMciB",
  "key34": "57czhkEQdsGTz4AeFfFwyMmz5FB9K35St5iEd3Cxkr4fCShXAQqcD1rnND98LABDTjNi9K5zRH7dFykhKSJmVToe",
  "key35": "4bFztkGUShPDCZ1GaAkPxkmWHmYXFY5uQnRYSfqGZ4LSk6Lmu9oZcfoXS78LRfpg9VR5B98p4WhHdfXJoJHcSMbE",
  "key36": "5LdsyEmr5Kb4Z9eLtQaaWpUU5gt4UNw5j9VXSGx1ok71ApZ8AKJc7i2SDQK2DrRF6n5wC2F7chFKHwvrpyhxyUBk",
  "key37": "3tySrdeSQ8rUSRP5S7TVbqVAhH1YZcaCt5V94aYTC4SmwcvNFWftUijT2D4xnZGdBDVxv2xVuY5ULJRPVNRHD3vZ",
  "key38": "3QPjyR3GgL52pWUAuuPzrzAmXTp8Gq6uragn3Jngr76fz7qjQFuUNWW3mWhiE9P14ZoWRBT71gtNVXBiwYdzbkEe",
  "key39": "4tctvRjhBEpuMtakdB4ZGKwD7pyHq1DwoPiSGexcmXaevwXu5VDKkQphLcp3pWUifHe3vBYZ7NUY2BBaQ652pBUk",
  "key40": "4axy6GAv2dffEKQwNX9rK6kuRk3HhKmPZuuGSdgtS6A8BghELDEtzuqZuPAwFZjSHbTNc3Vy7XihfvvXGTB2Dvim",
  "key41": "FdqhxngJUBT4HGQf4jLRHdwH3efpgrHc2uMbWUK7SuEMZ755vJjaYsr5AkXFSH8c4xaueDoE9kHD1eMDVrpUXkj",
  "key42": "5wSSWdpWuVe5xLNptyVSzEUkT8D8wcTQVx2Whzy6w3EaGdkYVsijeMgNkCnHKTFWUGn755RDuwZz92qy98rckret",
  "key43": "27d4CwQxsXZJ538nYz1DjtP3Ggjm9BxRBAyiDEnFgNJzxeXykBQUzs6h2QfYYJPN9Fppz5kb54EDLapDVJE6SfeP",
  "key44": "2rumjzk556otnvT7tC8BAYCNMA4ysEjTmkQrZ9zbMPHrzWujWhqxZmRLPNkM74hQKbsFef2Cj8Q3L4J8zu9Ee94z"
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
