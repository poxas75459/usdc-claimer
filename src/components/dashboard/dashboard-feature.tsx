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
    "5Lcs9TxbdbmrC8nvankYjB16VCieoswgsszNy1EiM8JgtHoXAqGeJtreESsSc1H9w27KjRPVtxAovxWsDBzrYk9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66XHz8gegUPKf9w2NfVS6KtkCDW2RgUpxbkjQP14KSYtHqVdAaLFe1mahWG746tpZgxMJWbWrfixssWZFSFMsTkT",
  "key1": "64a14HHVqvwZu9f81jv2bqaJPSreG1oKq33wh8QuMDq4k498QDFXeeDtb6Yzaep1C5PwKbKqxCnRHtqmJnwf9HtC",
  "key2": "VZdRaFZGzqGfjLXUGDKJk4t1S6JtEJ8fAubzQXixJsEce7LEHaumSx9VAEdEJXNy31sjCchp68PFFdpYJBcvBGr",
  "key3": "24Uz3EFfECfAMrocj6hDvjEsUwZnK46UMXez6n31MjT5uiAUi8LoZH1hQX6JryDGW5j8orEu5E2Gk1o9zQjkok74",
  "key4": "2nULQLRXqLo78XGojD5J5P6Pmwik1yR47xkDHysS5fukxqe7Y2cDzzomSUiNyy1rztU275ELLx16nUgVwMUKMrb6",
  "key5": "3516WYAM3jQYRvrtKy9L56pedSnvQhkDdW9XvYSzuJQjGE3NV1p78hgFDdZvJGbUUbromSAFiqCKMsZcY4DdCeet",
  "key6": "5ounZKxe9woDBM99RNBcfUYDUvepfdzTxX8q7woWAFjVHHZKcCjd2QE2fVeJBP78wZRxa259TL1VCHtHGcFf6R6B",
  "key7": "3Xu7frrarKuxHoDd3WaE3CDF25HnG4K3WvKPv8aFkpAfvEfFcMKfVf9RdsVHEgh3jqdFt5AzPz6DWbcnN1yV6kws",
  "key8": "Wj2uVAcvsmvXGq3sZibYEss2U6Wg2qG4Qp43mycEJBD5QyVU1P13zjREpGji9vDB529ymZJPT2Ho5o3bQViWDkZ",
  "key9": "2HmUBBGJ8QgPxswVCYK7nyxTU8g6PS1ThqP6NeBLH7wo2wEVNrD7mV24wp6pSMmovRcEqS1j9LKJnkDqyExmyXih",
  "key10": "3PqvTid6oJrfGQeTvukFQX3NiE5Rc2p3LBmc2gEcvHtNVMeUtsjp41rdz1uuBqRWC8njnzYmua5Ho5fw5azJA7n7",
  "key11": "54ZgXiP9BLtTPGnDGQZxQHj554vzimYUEFNJd9UipQMZiqjkvViNR3GByLxT2WXURgQWwgnt5cuiosH9vnewqgo8",
  "key12": "vX747x1bwd5KcUCK8xDJrfzyswWgRmK2yxnAGr1MHn85qryEN9jitowF5GPSm88CXu3GVFFAkQTvDmucGSvvkBA",
  "key13": "5FBXWzSUy5WmxfcUaq1HrsTAcESY3n3WzKXH1LdMi88BNrHpuxeXuoSKZqXXebW9odkZ91uAtXQXpq5TYatZ8Aos",
  "key14": "2NSAvAi4vTa2hRoq5jkYBG3rsF7qfx1qnhWmMFgfxm1L6aLKznSWMSmUD5kGc85ueHKGNua9rEfr5HibhaWAPwRj",
  "key15": "4reTgQDEFvdnfvj8s31hQghYmj5Jh3Ycnp9iRCDN6XgwwFPGJ1Rnu7HtTXFDzaoDzMQ5zGX5ngyuZHSLauwWmSf1",
  "key16": "49RmcYSDPXpKHW4WXQFP9YkfU6st1rtHodGkmBfTpZtf6kWpTZNfa8wWj9ocZAwdXynQVPrb9X3aoA44XNWfTEUi",
  "key17": "5mhiy7UDmybMkBTEdnD4G14ryL5xquEkb93K9wnWKk773fDWhdADymDff6Zavf7zcVPLU8KTCp6uJjSVuaCQf79Q",
  "key18": "5gPHZHp7sSHHF65SPs1fRgcbnMWBxe5dtX93f96sNwnzy4FywhLtrLHLrgLJWpH2JvbGKfNCXeehuGiEwznKNjPd",
  "key19": "35mMqkSkv71R3XSXzRZAfLgvpxnpLP6yE4Uw8irUFimDuas9t7YpteP5QCCGD1C4D3BK2tpnv6UDq8wQNkzzc2YA",
  "key20": "3QCKBh6tbXPL4WZoHp74LxdfMWW5UJyz2fnXtwMF6QuHk6V5MxxWD9WvrtrXv2Ar86CNkEjKMraTkLJtNg7iEGfv",
  "key21": "5JQFxAiF8WBAXdaHW7WYVbXJPeE7cewuuBqhiQgzgbQmJwyuRfeJj69Ki7YQKKqLh73s4ponAaUuuQbnXU9Q7XCd",
  "key22": "NavyZmkYX2tHVQq2gznSL55UhEC9CTgVCxRvpZddNWQmKV3BNoFKoz2JvQkKwEfEYeGa4DZLtkzJAcWUeCHiNiD",
  "key23": "4KMQnW9btLJZnDPTkn1xVdChdsfU62HGNkLFDdpdP1aPPRAScx7nAYnt1jjvYTdSEkvZe6ztLiXC2meBDA9njASJ",
  "key24": "28PJV9qrKJFFeZFcutoTnGhgEYh2x2ox4h1hwymWd58xmPnLwsfCwUhPvu2fSNQ1jvm3Mnbi2h1hNLpypL8Mxc23",
  "key25": "Gx4ATsuMGt8G51Vs4CqtvoBsTywdhdmjMkioUDfc8XnT3XMJWws9SnhTHLR3g2BDaMyjFDsDiJQRfWThFJJPUqM",
  "key26": "2RJd2FwJCSvmK2xQBg2DvkfzkafaFKVCCsoWxu61mARkyh3v57ZYhhza1HP65t2yLiUvK12ad32cjw1hfBQdrraw",
  "key27": "3aiNuuTyiUdV82FMmEFRRR8jDnjT1umBQAU8SgkshALpLTbCKGMNVU3CSGtKX9rWWeUYZtbfgzzFwsuaF1w2bxZu",
  "key28": "4AjfvXz2FbBtD86vbK6hxoQCKUjQNVeWnimXf28QbUyHQADAwNFcAjNeUUzKWkqpmFN4m3HxCmTrtKZg329D35i8",
  "key29": "5TGvELYA3df8XwXmbMLLjukWq2cbKonVnDqBnXybMupt8KBZEcZ1VWRF71TkDXvHMXZwSkJKc7DveUCZaHCSLHH7",
  "key30": "4oW4emPsZeJyjD7QkLP2JEku3JopKTNxcwabvkWAvjFNkW2j5mZobewEnLZ25u8neouBSPNrDYzyhBojaVK4Qs4A",
  "key31": "1PBgVJ42ZgkLbSK6MxAG8F1zvEsXmS2GaVC8quHiRsEMAN3jDHTrJXFnCwkdc5PfKRtpo4LsKXbXZjp3FecGkCF",
  "key32": "528XuQpiqhyALhgsr8cRbNUWivExCjH4MXfAqNkh5NUUJ2YjKhQhq3r2ttTDmcxLU5nBLct479Juaqp9PsZZMuBE",
  "key33": "43rbYGsjiKSDL5NPLZLvLgaHPMnv2pFp8JiNYR9NCdSDUjEY9Xr2WBrhuir24yH2JcxYbn11JjgJjxDk3KPPD8R1",
  "key34": "2RRjfZb8qbNuSJJ7YSoR9FXAeaioMYSMBZiotPRXsx2iQnRotRdYBoKWkac6H7knBV2BDKoM7uPD58QaYDvjUaiW",
  "key35": "2EWTdNF4dGDn2byvgHkSBb8AwXj8FgjPi89GwR8FcaEf1JNVseWCRTMoxbwTUXQGe1iaWrcXMhQACaD5fJQHAkD4",
  "key36": "29jiJbNfnrck7oDksUSd2CZHqPgncMkZxuuRgigdPUyiKH2FY1hAZuUrsYmuWhdRu7utwNaPpCruyxiqd7NcCo43",
  "key37": "2JVQoEaRwYHfDj7dYFmq3PxuK3k6hpAXqgrfF4o6SajSSG9GDifvFiuHxDpMj8qZyEykiRLdDd2Fj2H2CfKBfYgt",
  "key38": "2arhUa2RuA89b8Vtem7jPwGb4jXNk7yK1xspc7qbXhJ1KgSqfkMkMHuW5x2Yk6h9xUSauTUZgwz32NAiKGayUkb6",
  "key39": "3qha7FbckAQiosXH3WTZhrrpgPjSD9yaHJUBVcKgZP4uRpn8gRVc8V4ZjfrTHvdTGrweyYRhiS5UsPk3YAGL75Sy",
  "key40": "5Sy9jBhqbDnJwcwAHNYhfpfSnSqSQufKnafeozotGKiaV2mtVwaaphRjX88ba5gzjjpL7igYMynrksAq9DRddUw8",
  "key41": "5pfkYw7fsxjefv13aBSzLpJHYRwyBbbMHE6gthGBkycUzbRjjhuWztYZBKiis1rEY3cGWr7DhnD4LHcCLNmYR7dg",
  "key42": "Ae7fFiumh1m5KuV7Hss6SbYTJsNcdvDqBr2gsdiDsqZeLyjtZtF2DXXb93jAptE4Za2jrTvuhD2LJr6h8EZYnTQ"
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
