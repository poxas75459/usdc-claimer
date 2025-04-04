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
    "fw3r2ThZCptRPMo82owX7dbcUhvxxwprfRSLGEWrxHeHzzyzbbkg1hxpLZvLRcPAcbn6PUVjAUmUkYeXZDzvSxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B6cA3yq6uxhW154rNwBDoWusVuWydJHwLT99C1NCpy7dkbfgYVq1ud4o25EdLjcwbLF7UerpD2QPHtUWFgMdvMo",
  "key1": "3tUrN9uVcc7fc4rZwBjEYn5zwGhJRyrPRMr7JZgUW8JZMvZHUh5rxfNUac4YvfqN2B6TMiADPCSmfMDdKeaPa78b",
  "key2": "5gCXJWzV3m6GK1N9DmS8zfyUwvCRmgTHdW82JZtth8Tnv1MsEanmTQzbNFVcUWEDpiR4yqDhmVJifs2uq1pY74T7",
  "key3": "5cw5WmcBtb6o1Edd1ersgpaZ6kGqoHy72jPFDi36PmKXLcaxoF41cj7npm5egyK6DThoaLtSyW6x4mg1F3t967Sa",
  "key4": "x7QxVVwZytozxWzqxkcrPypwqcVs2TyU6BRfqPFy984MyCKJ6b3jyR3v8mVfv2WXTSW66cxCyEhGPYVGeiazvZA",
  "key5": "5pmEsemTmncupmZx4NMQEx4AZzUQGkYd35CsXvhpfMY5wceeECwTLuS4eKkXfqsGDdQEXC9qGpfwzuuUXK8bQM2c",
  "key6": "3o51RbiQdgfJuSe9QiQXVocw4WgjkoqXLFo1LpXTPV4B7x94KobrT4cyVitKsa4B1Z1ZHhMoYe3LA6ekBDs28MrK",
  "key7": "38bjksfbbjs74fnRTZuHtiwDup9ZEJWeYYQ75goq9u55D4GDq6oNarnMbbMUaV6s94xQTgnEZgD8Q335KcyP65cN",
  "key8": "TYfbUEAvkF2imMwQQQPkfyUFkDZW2qsXvAhjLUqx6SbnYWh5zdNpAarVh4SAAH5rJdMY6De3HaeaH9FDNaGPcCB",
  "key9": "3fjedtda4gJq4Kdzz9y43TfuhfLXTurNWss38UzejpiGAdV7zDM2JXFHCTKYXbxAjKQRh7hv5eYQs9pmtm6g9Tuo",
  "key10": "2J3ynGjhftvjzaVbM6wdSVPBcLY781Aj7Gb5FvrcaXViSpMg9qfbbHZyCLGxGgNiaw8YfAP6aTK2dKBQqJL3mMnv",
  "key11": "62FJnZQg9ARNZf9ffPXshhiSavcnx8AuiaJiQ4PEEBd56YofTNWbQRCQkFzdSRpKNmXZdrbDpGr62kXhq46Zzg4m",
  "key12": "5ZAERHr7GY4Z6oGAtnd7wi7HPB4UDJ1XVKcyFvK8Z1o7F9da9Y3yCQoyj8gadEfobsVJCweDwgWgUfqgWfRXv3Gp",
  "key13": "2LMnu4XGw5buoNZbupWJvCFf8n3LQ556XUaeGmKHDmgqqtc6fuEyNRcRgkCLsKZJUwyEHus3A9L3FYCzLTG8gn2z",
  "key14": "48HuFB27KDBs78sK86sWsaYrtQyTZ7gi28kgfvcVYLKqepBhDjV4Fo8f1J58DszaNjyXsza8zH4kBfQk5Y3ARwuW",
  "key15": "Nsx8So565GMuvr24rHFvvDXyGdLdUdrHGkWE1s5vUhbGetPkJxLz8nuBEr1B8iJc5W59Gi2ZUXeZypYWHsExDVj",
  "key16": "fSesV2dW9ub7gBLsJRUJwUaibYAs4BdCFXY5LrfytL1UK1mc9VXasx4Be7bMbCAaXSQ3BU8J9GzSvNQ4VadsJmg",
  "key17": "3bbT5cKptJXsDRvyFamgoWXxJTLucpxNSoN3S3GBBq6tVytLm756KGQECLApJzMXnUmTUaypDPZuBiK3SrYwCzzk",
  "key18": "5JM8z6fcuruWQrzreN9GnRn6DzgXrjzF6fB36Fk7oaBDn6ibZjhFYyDqcTkgRGDTPUnPj1SEFBZ7TNEsMWJ6Y9Bx",
  "key19": "2LaBkS97tdjc7amtA5Hb69F7a3xEsUkwZ5NBn8gfvZvhogfuiKTG3my5NLanANuqgnNza1cu8AbEbPBiK1fsBCtj",
  "key20": "yrrg97WNjxiw3YffkYkh325wnpUsQ4fqufghTVZuVwvTGETY6k6NzWyeW7De74Vq6rn6naRmg7YQpJXXh1fv4xU",
  "key21": "22FMGzdVx4yMpWbj4cK2A9n8z1RNDMqF6R1kDiebveWfgrczsRYGkAyGShPCQRJ2aFabkyMNAnjT3Gq1cspvMyBo",
  "key22": "5p9pN2n5ADVGidsNm7uQmDh25ssqsYDTn1jDrbCRqBVkte5karSu1d2qQNbn8ZgQ2f5pfYqWvxKAdiqwDwHuaLLS",
  "key23": "39p9tdegjZJyBYKunTfxFX1daTUCZD73cQapUJjwJvhUzm3LakqGmtJNuiRUA5sppR5kZL7mECnDc2Er8wrvW6N7",
  "key24": "5V9WjpNvphKqjHjj9YjL1ybKamfnoRBG1FoQd7EGiT17q9cWuXkv4MkomoTSGRHYFYL34kBofcVsLWXrc86vZbb4",
  "key25": "kKfGem5TPjm7rJB8M5tNvxPXu5Rd5ZnBhsfSm5RQf89jbD3BD8xTAroVF8ik4hx1dqLkTP2qpJqG4LDrSAKYNTh",
  "key26": "2fEcpinr2vfxhdJNZd8P3JdkPGcFwPqgvTih8J7x2Ypm2hvESJUq8B2sCo5TRYeqGS3xyZ9zUrDkSs4cwzsY2fAF",
  "key27": "4FszV4cA1XCZNHt2SKs8D8eLExdR8K2gpRWz79Aqgqe2D95hLEHG4WPSyq3D1BKy3o8wr7VQ8AX392bKDs6FUxht",
  "key28": "4p9Gvokj3vurijnJDzmpJunj8bBDG2bW92cCEKv7x35k7KJNJrwpEgjykykq3jKLxhqtUHnEupjCtHu2RKCQ2zpH",
  "key29": "5yjtP2E2Ne77mwr4J4H295QY36hFrFwT5ji6qg7XpXtB3T3L36dBzT8h2VnJCioVYBwfty7zAQF32Z7vxwE3pnU3",
  "key30": "b6NFtGPTMuFv9CBdfbU42F8qJHq1kHSrEPwrYUBcKNssMpLjaLUfT1wjBf6Q5CE569zm2PSgRRgjLxC8pvZtMxA",
  "key31": "5nExUdB3V3bST6g4huEHo5Pf1fhLDx9GE1cKkH9Nney3ANNkaw7v5d2vL7NLTiUddarcsjdhgAH5YHivvEuzho14",
  "key32": "3eaNCVqm3B6V64yzZipk8pQfc61RrqCwHN3y7SPtNmSjerVJJ65qJVUWG4Yw4NR7YACdQE2pQ6Fis5XtMutZeAQG",
  "key33": "2H6gaDVV7SeGPNHhHH5mWwsjodT5GwTramXgodmGf2JNdRpxA3ptGBewnKmzmY5DX8hkwVwx6KcwsRn7qaoVHP3p",
  "key34": "2uY2np71m1L9jYVT8RNQYK95tDpHvKtDZPhv7VbR4utFK4jCTgJUELU22df4KPjPwqMeTssSYkrP3UwTqSzz9Qgv",
  "key35": "36e8RVNAdnn3UpLdKmwBiyj8u71VY4WibwUUoZeQag7bGXmHtQ48t77YTU6ZoBq4nPcSQNLuSme1tx3pVnDtXSVt",
  "key36": "631rC7r4XNyrwujL7FV9h6vUTkPMhZJ1QB8uFNNrdmBrU26ah1MAkNGJT1vuLCutYo9AYVKaDERfVdtLe5YdJTX",
  "key37": "4cStLcFiw2VqLVdZsAppThMdJ4RCNL6mGVVXLYACXn47KLjwgaTYttFAv3DM2KkEn448VSVjTm2PtexTPxBaLJw6",
  "key38": "5pgYGBn2u9UjRL3pfopM6ukDH8pcWEFD87rukZG4wpSMuYM5QtsiVvUoozBoHkShZEr8KHi4e6RiKdEDaDopmzm5",
  "key39": "5caRDFfig8NX52dH2xLKtj7rHrUZbpZ3d4NUvnibSMLsiRrBu8NXBxhRhNLxW9G7rN5Mdh4rMUy2qQQ8aG7JZZn5",
  "key40": "5yLSKoxpnxuHkXGEHzapC79ktkxaLEAuY22yXeheUMwtUiNbrAUodHRJiFeDbWJvdmGQ12FgP7TEqBGqSWBQBwue",
  "key41": "Tn8hoo4KCkDHWHrgZAsLFzsJDSqAZpFPVDUeayNR9KFVjXtjyXaPkN3LoXPwhCyATAVnmhpfGxR6CcK9MzUoZKZ",
  "key42": "4M8ZqZDqVNqbPkQNCCVSERdvTBZY5uG1y4utHLvHnf8bFXfHuXPAK8dLEhxvSPJQxbecor1kHxbT65vPMsFt2G5a",
  "key43": "53Wz6xHWsuNQcsUX6UzAYKCSu4LJ6jfi14gn2eTyZSxUkspqqhrhHMWnojPPPwkfaEqeKoaFs9ggYC1ozv8Upvsw",
  "key44": "FbSdvGVQNGRGYKq2ekRgrBPhyNQ7UpZar4YSF477oswTtMZywJ8DoyqwTcRfjeA1fRNMur4dyWWpAhCtRRGEti2"
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
